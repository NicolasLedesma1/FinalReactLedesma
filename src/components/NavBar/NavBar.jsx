import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidgets/CartWidgets";
import { contenedor } from "./NavBar.module.css";
import { marca } from "./NavBar.module.css";
import logo from "./assets/logo.png";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header className={contenedor}>
      <Link to='/'>
      <img src={logo} className={marca} alt="logo-Empresa" />
      </Link>
      <div>
        <NavLink to={`/category/fuego`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemon Fuego</NavLink>
        <NavLink to={`/category/agua`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemon agua</NavLink>
        <NavLink to={`/category/hierba`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemon hieba</NavLink>
        <CartWidget/>
      </div>
    </header>
  );
};
export default NavBar;