import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Nav-o">
            <h1 className='h1'>Syed Ayaan Ali</h1>
            <ul className="NavList">
                <li className='tree'>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Education">Education</Link>
                </li>
                {/* <li>
                    <Link to="/Experience">Experience</Link>
                </li> */}
                {/* <li>
                        <Link to="/Projects">Projects</Link>
                    </li> */}
                <li>
                    <Link to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;