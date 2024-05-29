import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ItemBlog from "../../components/blog/ItemBlog";
import axios from "axios";

const DetailBlog = () => {

    const {id} = useParams ();
   const navigate = useNavigate();
    const {data :blogs, loading, erorr} = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = async(blogs_id) => {
     try {
        const res = await axios.delete("http://localhost:8000/blogs/" + blogs_id);
        navigate ("/");
     } catch (error) {
        console.log(error)
     }
    }
    return (
        <div className="container mt-5">
            <h1 className="text-danger">Detail Blog</h1>
            {loading && (
       <h1 className="text-dark">LOADING...</h1>
     )}
     {erorr && <h1 className="text-danger"> ERROR WHEN GET DATA</h1>}
     {blogs && (
        <div>
            <h1 className="mt-3 mb-3">{blogs.title}</h1>
            <p className="text-muted">By {blogs.author}</p>
            <p>{blogs.body}</p>
            <button onClick={() => handleDelete(blogs.id)} className="btn btn-danger">Hapus Pesan</button>
        </div>
     )}
        </div>
      );
}
 
export default DetailBlog;