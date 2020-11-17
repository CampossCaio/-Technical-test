export default async (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Caio Campos', age: 23, profession: 'Developer analyst' })
}
