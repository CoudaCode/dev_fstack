import { useLocation, Link } from "react-router-dom";

import { useAppContext } from "../context";

function Single() {

  const {posts} = useAppContext()

 
  // REcuperation de l'id passer en State dans List.jsx
  const params = useLocation()
  // Recuperer l'objet en verifiant avec l'id
  const post = posts.find(post => post._id === params?.state?.id)
  console.log(post)

  return (
    <>
      <Link to="/">Retour</Link>
        <h3>{post?.title}</h3>
        <h3>{post?.body}</h3>
   </>
  ) 
}

export default Single