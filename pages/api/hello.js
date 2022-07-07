export default function hello(req, res) {
    if(req.method === 'POST'){
        return res.status(200).json({ message: 'Post request' })
    }
    res.status(200).json({ message: 'Hello World' })
}