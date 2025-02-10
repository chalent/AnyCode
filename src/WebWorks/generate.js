// Worder 子代码

// 监听主线程消息
addEventListener("message", message => {
  console.log("子线程监听", message);
  if(message.data.command === "generate") {
    generatePrimes(message.data.quota)
  }
})


// 生成质数(非常低效)
function generatePrimes(quota) {
  console.log("开始执行");
  
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }
  console.time("longTimeTask");
  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  console.timeEnd("longTimeTask");
}