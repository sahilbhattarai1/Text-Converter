import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className= {`nav-link active text-${props.Text}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.Text}`} aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.Text}`} aria-current="page" to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.Text}`} aria-current="page" to="/">Info</Link>
        </li>
       </ul>
    </div>

    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleChange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.Text}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>


  </div>
</nav></>
    );
}