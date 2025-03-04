import { Link } from "react-router-dom";

const Navbar= ({brand}) => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to='/' className="navbar-brand" href="#">{brand}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/add'className="nav-link" >Add Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      );
}
export default Navbar;