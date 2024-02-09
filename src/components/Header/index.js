import { Link } from "react-router-dom";
import "./index.css";
import { FaShoppingBag, FaBook } from "react-icons/fa";

const navItemsList = [
  {
    id: "BOOKLIST",
    itemText: "Book List",
    icon: <FaBook />,
    path: "/books",
  },
  {
    id: "CART",
    itemText: "Cart",
    icon: <FaShoppingBag />,
    path: "/cart",
  },
];

export default function Header() {
  return (
    <nav className="navbar">
      <div className="inner-container">
        <Link to="/" className="link">
          <div className="logo-container">
            <p className="logo">C</p>
            <p className="website-name">Crossword</p>
          </div>
        </Link>

        <ul className="nav-items-container">
          {navItemsList.map((eachNavItem) => (
            <li key={eachNavItem.id}>
              <Link to={eachNavItem.path}>
                <button className="nav-btns">
                  {eachNavItem.icon}
                  <span className="nav-btn-txt">{eachNavItem.itemText}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
