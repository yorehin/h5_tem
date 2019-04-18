const Domain = {
  location: window.location,
  href: window.location.href,
  protocol: window.location.protocol,
  host: window.location.host,
  hostname: window.location.hostname,
  port: window.location.port,
  search: window.location.search,
  hash: window.location.hash
}

let baseURL = "https://busih5.dayu1.net"

// 配置开发环境和线上生产环境的切换
if (process.env.NODE_ENV === 'development') {
  baseURL += '/h5_tem_back/public/index.php/'
} else if (process.env.NODE_ENV === 'production') {
  baseURL += '/h5_tem_back/public/index.php/'
}

export {Domain, baseURL}
