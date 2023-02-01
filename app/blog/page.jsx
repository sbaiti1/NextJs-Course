import Link from "next/link"
export default function Blog(){
    const posts = [
        {
            id :  1 , 
            title : "blog 1"
        } ,
        {
            id :  2 , 
            title : "blog 2"
        } ,
        {
            id :  3 , 
            title : "blog 3"
        }

    ]
    return(
        <>
            <h1> Check all of your Blogs </h1>
            {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
        </>
    )
}