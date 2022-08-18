export default async function hello(req, res) {
    if(req.method === 'POST'){
        return res.status(200).json({ message: 'Post request' })
    }
    const fetchRes = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const result = await fetchRes.json()

    res.status(200).json({ result })
}
