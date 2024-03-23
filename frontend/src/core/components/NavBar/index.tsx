import './styles.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="navbar-logo">
          <h4>MovieFlix</h4>
        </a>
        <div className="">
          <div className="navbar-nav offset-xxl-12 navbar-logout-button">
            <span className="navbar-logout-button-text">Sair</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
