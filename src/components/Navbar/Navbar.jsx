import "./navbar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/eshop.jpg";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="div-innecesario">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>

          <div>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="">Inicio</a>
              </li>
              <li className="nav-item">
                <a href="">Productos</a>
              </li>
              <li className="nav-item">
                <a href="">Nosotros</a>
              </li>
              <li className="nav-item">
                <a href="">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
