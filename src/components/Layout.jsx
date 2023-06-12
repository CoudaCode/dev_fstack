import { useState, useRef , useEffect, useMemo} from "react";
import { useAppContext } from "../context";

function Layout({ children }) {

  const {addPosts} = useAppContext()
  const [post, setPost] = useState({title:null,  body: null})
  const inputRef = useRef();
  const textRef = useRef();
  const [isCollapse, setCollapse] = useState(false);
  const toggleVisibility = () => setCollapse(!isCollapse);
  const handleOnChange = e => {
    setPost({...post, [e.target.name]: e.target.value})
  }
  const handleOnSubmit = e => {
    e.preventDefault();
    addPosts(post)
  }

    const isValid = useMemo(()=>{
        return Object.values(post).some(value=> !value)
    }, [post])

  return (
    <>
      <nav className="navbar bg-body-tertiary container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MERN</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="layout container">
        <button className="btn btn-dark float-end mb-4" onClick={toggleVisibility}>{isCollapse ? "Close" : "Add +"}</button>
       {isCollapse && <form action="" className="mt-5" onSubmit={handleOnSubmit}>
            <input ref={inputRef} type="text" name="title" className="form-control my-1" onChange={handleOnChange} />
            <textarea ref={textRef} className="form-control" name="body" onChange={handleOnChange} style={{height : "100px"}}></textarea>
            <button type="submit" className="btn btn-primary float-end mb-4" disabled={isValid} >Submit</button>
       
        </form>}
        {children}
      </div>
    </>
  );
}

export default Layout;
