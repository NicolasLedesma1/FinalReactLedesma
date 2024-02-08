import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidgets/CartWidgets";
import { contenedor } from "./NavBar.module.css";
import { marca, navegador } from "./NavBar.module.css";
import logo from "./assets/logo.png";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header className={contenedor}>
      <Link to='/'>
      <img src={logo} className={marca} alt="logo-Empresa" />
      </Link>
      <div className={navegador}>
        <NavLink to={`/category/fuego`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemones tipo Fuego</NavLink>
        <NavLink to={`/category/agua`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemones tipo agua</NavLink>
        <NavLink to={`/category/hierba`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pokemones tipo hierba</NavLink>
        <CartWidget/>
      </div>
    </header>
  );
};
export default NavBar;