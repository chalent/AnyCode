
// 文件分片
const createFileChunk = (file) => {
  const chunkList = [];
  // 计算文件切片总数
  const sliceSize = 5 * 1024 * 1024;  // 每个文件切片大小定义为5M
  const totalSlice = Math.ceil(fileSize / sliceSize);
  for(let i = 0;i < totalSlice; i++) {
    let chunk;
    if(i == totalSlice) {
      // 最后一片
      chunk = file.slice((i - 1) * sliceSize, fileSize - 1);
    } else {
      chunk = file.slice((i - 1) * sliceSize, i * sliceSize );
    }
    chunkList.push({
      file: chunk,
      fileSize,
      size: Math.min(sliceSize, file.size)
    })
  }
  const sliceText = `一共分片：${totalSlice}`;
  document.getElementById("total-slice").innerHTML = sliceText;
  console.log(sliceText)
  return chunkList;
}

// 根据分片生成hash
const calculateHash = (fileChunkList) => {
  return new Promise( resolve => {
    const spark = new SparkMD5.ArrayBuffer();
    let count = 0;
    // 计算hash
    const loadNext = (index) => {
      const reader = new FileReader();  
      reader.readAsArrayBuffer(fileChunkList[index].file);
      reader.onload = (e) => {
        count++;
        spark.append(e.target.result);
        if(count == fileChunkList.length) {
          resolve(spark.end());
        } else {
          // 还没读完
          const percentage = parseInt(
            ( (count + 1) / fileChunkList.length ) * 100
          );
          const progressText = `计算hash值：${ percentage }`;
          document.getElementById("hash-progress").innerHTML = progressText;
          console.log("文件分片进度读取：", percentage);
          loadNext(count);
        }
      }

    }

    loadNext(0);
  })
}