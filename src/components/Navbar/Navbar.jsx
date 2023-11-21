import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "../../features/authSlice";
import { v4 as uuidv4 } from 'uuid';
import "./Navbar.scss";


const LINKS = [
  { pathname: "/", text: "Про платформу" },
  { pathname: "/", text: "Здай в оренду свій ПК" },
  { pathname: "/", text: "Новини" },
  { pathname: "/", text: "FAQ" },
];

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

          {LINKS.map(link => (
            <Link key={uuidv4()} className="navbar__content--link" to={link.pathname}>
              {link.text}
            </Link>
          ))}
        </div>

        <button className="navbar__content--button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};
