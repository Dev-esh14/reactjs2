import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#"><i className="fa-duotone fa-house" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item bg-warning">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Rules & Regulations</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Price Card</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
               <div>
                <Link to={"/"}><button className="btn btn-outline-warning my-2 my-sm-0 submit-register" type="submit">Signup</button></Link>
                </div>
                <Link to={"/login"}><button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Login</button></Link>
              </form>
            </div>
          </nav>
        </div>
    );
}