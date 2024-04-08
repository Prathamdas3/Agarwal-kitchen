import { Link } from 'react-router-dom'
import Logo from '../assets/Images/logo.png'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleMenuBar = () => {
    if (toggleMenu) {
      setToggleMenu(false)
    } else {
      setToggleMenu(true)
    }
  }
  return (
    <>
      <header
        className="header_section"
        style={{ background: '#f7f7f7', height: '10vh' }}
      >
        <div className="container ">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3 ">
            <Link
              to="/"
              className="navbar-brand "
              style={{ cursor: 'pointer' }}
            >
              <img src={Logo} alt="logo" className="mr-2" />
              <span>Agarwal's Kitchen</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenuBar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {toggleMenu && (
              <div className="">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center ">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link to="/">
                        <button className="nav-link text-dark">Home</button>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/recipes">
                        <button className="nav-link text-dark" type="submit">
                          Recipes
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center flex ">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to="/">
                      <button className="nav-link text-dark">Home</button>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/recipes">
                      <button className="nav-link text-dark" type="submit">
                        Recipes
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
