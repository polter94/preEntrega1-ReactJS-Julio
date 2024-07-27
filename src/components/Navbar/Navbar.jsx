import "./navbar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/eshop.jpg";
import { Link } from "react-router-dom";
import { GiGlock } from "react-icons/gi";
import { GiSlashedShield } from "react-icons/gi";
import { GiCheckeredFlag } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="div-innecesario">
          <div>
            <Link to='/'>
            <img src={logo} className="logo" alt="Logo de nuestro e-shop" />
            </Link>
          </div>

          <div>
            <ul className="nav-links">

              {/* <Link to="/categorias/todos" className="nav-item">
                <a href="">Todos</a>
              </Link> */}

              <Link to="/categorias/shooter" className="nav-item">
                {/* <a href="">Shooters</a> */}
                <GiGlock size={31}/>
                <p>Shooters</p>
                <div>

                </div>
              </Link>

              <Link to="/categorias/aventura" className="nav-item">
                {/* <a href="">Aventura</a> */}
                <GiSlashedShield size={31}/>
                <p>Aventura</p>
                <div>

                </div>
              </Link>

              <Link to="/categorias/carreras" className="nav-item">
                {/* <a href="">Carreras</a> */}
                <GiCheckeredFlag size={31}/>
                <p>Carreras</p>
                <div>

                </div>
              </Link>

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
