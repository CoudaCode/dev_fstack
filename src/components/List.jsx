
import { Link } from "react-router-dom";

import { useAppContext } from "../context";

function List() {
   const {posts} = useAppContext()
   console.log(posts)
   return (
     <div> 
      {posts.map(post => {
        const title = post?.title.split(' ').join('-')
        const content = `${post?.body.substring(0,100)}.....`
        return (
                <div key={post?._id} className="mt-5 card">
                  <h2><Link to={`/post/${title}`} state={{id : post?._id}}>{post?.title}</Link></h2>
                  <p>{content}</p>
                </div>
        )
      })}
     </div>
  ) 
}

export default List