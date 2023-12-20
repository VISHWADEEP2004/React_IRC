import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faPaw } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assert/img/logo.png';
import '../Assert/Css/nav.css';

function Navbar() {
  return (
    <div className="bb">
      <nav className="navbar">
        <img src={logo} className='classlogo' alt="Logo" />
        <ul className='un-li'>
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              REGISTER
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className='nav-link'>
              DASHBOARD
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icon-bar">
        <Link to='/dogadop'>
          <FontAwesomeIcon icon={faDog} className="icon" />
        </Link>
        <Link to='/catadop'>
          <FontAwesomeIcon icon={faCat} className="icon" />
        </Link>
        <Link to='/pets'>
          <FontAwesomeIcon icon={faPaw} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
