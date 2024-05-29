import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const navigate = useNavigate ();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Aditya');

    const handleSubmit = async (e) => {
       e.preventDefault();
       const blog = {title, body, author};
       console.log(blog);

       try {
        const res = await axios.post ("http://localhost:8000/blogs", 
            JSON.stringify(blog) ,
            {
                headers: {'Content-Type': "application/json"}
            }
        );
        navigate("/")
       } catch {
        console.log("Error");
       }
    };

    return ( 
        <div className="container mt-5">
            <h1 className="text-primary">Add Blog</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
  <label htmlFor="Title" className="form-label">Title</label>
  <input type="text" className="form-control" id="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="body" className="form-label">Body</label>
  <textarea className="form-control" id="body" rows="3" onChange={(e) => setBody(e.target.value)}></textarea>
</div>
<div className="mb-3">
    <label htmlFor="author" className="form-label">Author</label>
    <select className="form-select" aria-label="Default select example" onChange={(e) => setAuthor(e.target.value)}>
  <option defaultValue="Aditya">Aditya</option>
  <option defaultValue="Reza">Reza</option>
  <option defaultValue="Galih">Galih</option>
</select>
</div>
<button className="btn btn-danger">Submit</button>
            </form>
        </div>
     );
}
 
export default AddBlog;