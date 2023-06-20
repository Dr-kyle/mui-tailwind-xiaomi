
export default function handler(req, res) {
  console.log('req.headers', req.headers)
  res.status(200).json({ name: 'John Doe' })
}