import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from 'core/utils/auth';
import './styles.scss';

const Navbar = () => {
  const [isUserLogged, setIsUserLogged] = useState({})
  const location = useLocation()

  useEffect(() => {
    const userLogged = isAuthenticated()
    setIsUserLogged(userLogged)
  }, [location])

  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/movies" className="navbar-logo"><h4>MovieFlix</h4></Link>
        {isUserLogged && (
          <div
            className="navbar-nav offset-xxl-12 navbar-logout-button"
            onClick={ logout }
          >
            <span className="navbar-logout-button-text">
              Sair
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
