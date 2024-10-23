import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


export const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);
  return (
    <div className="w-2/3">
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
        }
    </div>
  )
}

export default Blogs;

Blogs.propTypes = {
  handleAddToBookMark : PropTypes.func,
  handleMarkAsRead : PropTypes.func,
}