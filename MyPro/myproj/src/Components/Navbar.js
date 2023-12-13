import { Link } from "react-router-dom";
import '../Assert/Css/nav.css';

function Navbar() {
    return (
        <div className="bb">
            <nav className="navbar">
                <h1 className="logo">Give Love a Home: Adopt a Pet Companion!</h1>
                <ul>
                    <li>
                        <Link to='/register' className="nav-link">
                            REGISTER
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className="nav-link">
                            LOGIN
                        </Link>
                    </li>
                    {/* <li>
                        <Link to='/about' className="nav-link">
                            ABOUT
                        </Link>
                    </li> */}
                    <li>
                        <Link to='/' className="nav-link">
                            HOME
                        </Link>
                    </li>
                </ul>
            </nav>
            <footer>
                <p>&copy; 2023 Pet Adoption Center</p>
            </footer>
        </div>
    );
}

export default Navbar;
