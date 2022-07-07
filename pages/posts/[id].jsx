import { useRouter } from 'next/router'

export default function Post({ post }){
    const router = useRouter()
    const { id, likes } = router.query
    return <div>
            Post title: {post.title}, Id number: {id}
            {likes && <div>Likes: {likes}</div>}
        </div>
}


export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}