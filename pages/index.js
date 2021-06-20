import axios from 'axios'
import Link from "next/link";

const Index = ({posts}) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <>
        {posts.map(post => (
          <div key={post.id}>
            <h2>
              <Link href={`/post?id=${post.id}`} as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <p>{post.body}</p>
          </div>)
        )}
      </>
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const {data} = res
  return {posts: data}
}

export default Index
