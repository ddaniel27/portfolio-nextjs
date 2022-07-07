export default function SSR({data}){
    return <div>Your data:
        <ul>
        {data.map(user => (
            <li key={user.id}>
                user title: {user.name}, Id number: {user.id}
            </li>
        ))}
        </ul>
    </div>
}


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}