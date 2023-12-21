import CartWidget from "../CartWidgets/CartWidgets";
import { contenedor } from "./NavBar.module.css";
import { marca } from "./NavBar.module.css";
import logo from "./assets/logo.png";
const NavBar = () => {
  return (
    <header className={contenedor}>
      <img src={logo} className={marca} alt="logo-Empresa" />
      <nav>
        <ul>
          <li>
            <a href="#"> Cuadros </a>
          </li>
          <li>
            <a href="#">3D</a>
          </li>
          <li>
            <a href="#">Promociones</a>
          </li>
        </ul>
      </nav>
      <div>
        <CartWidget/>
      </div>
    </header>
  );
};
export default NavBar;