import Link from "next/link"

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('Failed to fetch posts')
    return res.json()
}

async function Blog() {

    const posts = await getPosts()
    
    return (
        <>
            <h1>Recent posts</h1>
            <ul>
                {posts.map((e: any) => {
                    return (
                        <li key={e.id}>
                            <Link href={`/blog/${e.id}`}>{e.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Blog