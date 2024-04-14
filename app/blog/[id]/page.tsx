type Props = {
    params: {
        id: string
    }
}

async function getPosts(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

async function Post({params: {id}}: Props) {
    const post = await getPosts(id)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post