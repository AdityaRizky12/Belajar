import useFetch from "../hooks/useFetch";
import ItemBlog from "../components/blog/ItemBlog";
import Navbar from "../components/Navbar";

const Home = () => {
    const {data: blogs, loading, erorr,} = useFetch("http://localhost:8000/blogs");


    return (
        <div className="container mt-5">
      <h1 className="text-primary">Halo Adit</h1>
     {loading && (
       <h1 className="text-dark">LOADING...</h1>
     )}
     { erorr && <h1 className="text-danger"> ERROR WHEN GET DATA</h1>}
    {blogs && (
        <ItemBlog blogs={blogs}/>
    )};
    
    </div>
    );
        
}
 
export default Home;