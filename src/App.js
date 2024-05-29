
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//untuk router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from "./pages/blog/AddBlog";
import DetailBlog from "./pages/blog/DetailBlog";

function App() {
  const title = "Blog Pesan";

  return (
      <BrowserRouter>
    <div>
      <Navbar brand={title}/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add" element={<AddBlog/>}></Route>
      <Route path="/blog/:id" element= {<DetailBlog/>}></Route>
     </Routes>
    </div>
      </BrowserRouter>
    
  );
}

export default App;
