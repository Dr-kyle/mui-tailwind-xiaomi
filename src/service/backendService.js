import axios from "axios"

const getBaseUrl = () => {
  // server
  if (process.env.PROXY_URL) return process.env.PROXY_URL // SSR should use vercel url
  // dev
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

const backRequest = axios.create({
  baseURL: getBaseUrl(),
  timeout: 3000
})


export function getAppList() {
  // return new Promise((resolve, reject) => {
  //   console.log('get user info!')
  //   setTimeout(() => {
  //     resolve({status: 'ok', index: Math.floor(Math.random()*10)})
  //   }, 2000)
  // })
  console.log('getAppList')
  return backRequest.get('/api/app')
}
