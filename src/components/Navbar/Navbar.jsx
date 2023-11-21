import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "../../features/authSlice";
import "./Navbar.scss";

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeToken());
  };

  return (
    <div className="navbar">
      <nav className="navbar__content">
        <h1 className="navbar__content--title">App Games</h1>

        <div className="navbar__content--wrapper">
          <Link className="navbar__content--games" to="/">
            Ігри
          </Link>

          <Link className="navbar__content--link" to="/">
            Про платформу
          </Link>

          <Link className="navbar__content--link" to="/">
            Здай в оренду свій ПК
          </Link>

          <Link className="navbar__content--link" to="/">
            Новини
          </Link>

          <Link className="navbar__content--link">FAQ</Link>
        </div>

        <button className="navbar__content--button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};
