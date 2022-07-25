window.onload = function() {

  const worker = new Worker("./generate.js")  // 2022-7-25, chrome,firefox,edge不兼容

  // 点击generate时，给worker发送消息
  document.querySelector("#generate").addEventListener("click", function() {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
      command: "generate",
      quota: quota
    })
  })




}