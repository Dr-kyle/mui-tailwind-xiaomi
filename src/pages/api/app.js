
export default function handler(req, res) {
  console.log('app list', req.headers)
  res.status(200).json([1,2,3,4,5])
}