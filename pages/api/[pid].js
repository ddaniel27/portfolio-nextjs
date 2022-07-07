export default function handler(req, res) {
    const { pid } = req.query
    res.status(200).json({ message: `Hello World from ${pid}` })
}