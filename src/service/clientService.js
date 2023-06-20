import axios from "axios"
import Cookies from "js-cookie";

const getBaseUrl = () => {
  // 浏览器
  if (typeof window !== 'undefined') return '' // browser should use relative url
  // server
  // if (process.env.PROXY_URL) return process.env.PROXY_URL // SSR should use vercel url
  // dev
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}


const request = axios.create({
  baseURL: getBaseUrl(),
  timeout: 3000
})

request.interceptors.request.use(config => {
  const token = Cookies.get('username')
  console.log('token', token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config;
});

export function getAppList() {
  // return new Promise((resolve, reject) => {
  //   console.log('get user info!')
  //   setTimeout(() => {
  //     resolve({status: 'ok', index: Math.floor(Math.random()*10)})
  //   }, 2000)
  // })
  console.log('getAppList')
  return request.get('/api/app')
}