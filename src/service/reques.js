
const requestApi = ({
  url, method = "GET", ...fetchProps
}) => {
  return new Promise(async(resolve, reject) => {
    const res = await fetch(url, { method, ...fetchProps });
    resolve(res.json());
  })
}
