import { useState } from "react";
import { Link } from "react-router-dom";
const ItemBlog = ({blogs}) => {
    return ( 
        <div>
          {blogs.map ((blog, index) => (
          <Link to= {"/blog/" + blog.id} key={blog.id} className="card card-blog text-decoration-none p-3 mb-2">
            <h3>{blog.title}</h3>
            <p><i>Pesan dari {blog.author}</i></p>
            <p>{blog.body.slice(0, 40)}</p>
            
          </Link>
        )) }
        </div>
        );
}
 
export default ItemBlog;