import * as http from "http"
import path from "path"
import fse from "fs-extra";
import multiparty from "multiparty";

const server = http.createServer();
const UPLOAD_DIR = path.resolve("/Users/sxg/Downloads/", "target");  // 大文件存储目录

const extractExt = (fileName) => {
  return fileName.slice(fileName.lastIndexOf("."), fileName.length);  // 提取文件后缀名
}

server.on("request", async(req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  if(req.method == "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

  // 上传文件分片接口
  if(req.url === "/upload") {
    const multipart = new multiparty.Form();

    multipart.parse(req, async(err, fields, files) => {
      // console.log("各个参数", err, fields, files);
      
      if(err) {
        console.log(err);
        res.status = 500;
        res.end(JSON.stringify({ message: "process file chunk failed" }))
        return;
      }

      const [chunk] = files.file;
      const [hash] = fields.hash;
      const [fileName] = fields.name;
      const [fileHash] = fields.fileHash;
      const chunkDir = `${UPLOAD_DIR}/${fileHash}`;

      const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${extractExt(fileName)}`);
      // 文件存在直接返回
      if(fse.existsSync(filePath)) {
        res.end(JSON.stringify({message: "file exist"}))
        return;
      }
      // 切片目录不存在，创建切片目录
      if(!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }

      await fse.move(chunk.path, `${chunkDir}/${hash}`);
      res.status = 200;
      res.end(JSON.stringify({ message: "received file chunk" }))
    })
  }

  const resolvePost = (req) => new Promise(resolve => {
    let chunk = "";
    req.on("data", data => {
      chunk += data;
    })
    req.on("end", () => {
      console.log("这里返回的data：", chunk);
      resolve(JSON.parse(chunk))
    })
  })


  // 合并文件分片接口
  if(req.url == "/merge") {
    // console.log("合并分片接口信息：", req);
    
    const data = await resolvePost(req);
    const { fileName, fileHash } = data;
    const ext = extractExt(fileName);
    const filePath = `${UPLOAD_DIR}/${fileName}${ext}`;
    // console.log("合并前参数", filePath, fileHash);
    
    await mergeFileChunk(filePath, fileHash);
    res.status = 200;
    res.end(JSON.stringify("file merged success"));
    
  }

  async function mergeFileChunk(filePath, fileHash) {
    const chunkDir = `${UPLOAD_DIR}/${fileHash}`;
    const chunkPaths = await fse.readdir(chunkDir);
    // 根据切片下标进行排序
    chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
    // console.log("要合并的分片排序后：", chunkPaths);
    await fse.writeFile(filePath, "");
    chunkPaths.forEach(chunkPath => {
      fse.appendFileSync(filePath, fse.readFileSync(chunkDir + "/" + chunkPath));
      fse.unlinkSync(chunkDir + "/" + chunkPath);
    })
    // 合并后删除保存切片的目录
    fse.rmdirSync(chunkDir);
  }

})

server.listen("3000", () => console.log("Server is listening on port 3000..."))