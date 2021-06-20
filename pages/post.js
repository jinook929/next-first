import React from 'react'
import axios from 'axios'
import {withRouter} from 'next/router'

const Post = ({id, comments}) => {
  console.log(comments)
  return (
    <div>
      <h1>- Comments for Post#{id} -</h1>
      <ul>
        {
          comments.map(comment => <Comment key={comment.id} {...comment} />)
        }
      </ul>
    </div>
  )
}

const Comment = ({id, name, email}) => (
  <li>
    {name} (by {email})
  </li>
)

Post.getInitialProps = async ({query}) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const {data} = res
  return {...query, comments: data}
}

export default withRouter(Post)
