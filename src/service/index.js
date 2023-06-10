export function getUserInfo() {
  return new Promise((resolve, reject) => {
    console.log('get user info!')
    setTimeout(() => {
      resolve({status: 'ok'})
    }, 1000)
  })
}