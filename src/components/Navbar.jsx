import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';

const Navbar = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <div className="navbar-brand">
              <img src={Logo} alt="logo" />
              <span>Agarwal's Kitchen</span>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center flex ">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <button className="nav-link text-dark">
                      <Link path="/">Home</Link>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link text-dark">
                      <Link path="/recipes">Recipes</Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
