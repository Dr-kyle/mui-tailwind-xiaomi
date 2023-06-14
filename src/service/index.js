export function getUserInfo() {
  return new Promise((resolve, reject) => {
    console.log('get user info!')
    setTimeout(() => {
      resolve({status: 'ok', index: Math.floor(Math.random()*10)})
    }, 2000)
  })
}