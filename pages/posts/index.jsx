export default function Page({posts}){
    return(
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    Post title: {post.title}, Id number: {post.id}
                </li>
            ))}
        </ul>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}
