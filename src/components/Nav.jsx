import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Librarylogo from "../assets/Library.svg";
import { Link } from "react-router-dom"



const Nav = ({ numberOfItems}) => {
  return (
    <div>
      <div className="nav__container">
        <Link to="/">
          <img src={Librarylogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {
            numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
            }
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="nenu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="nenu__list">
              <Link to="/books" className="menu__link">
                Home
              </Link>
            </li>
            <li className="nenu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
