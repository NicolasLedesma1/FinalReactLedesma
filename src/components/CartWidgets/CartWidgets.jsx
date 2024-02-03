import { carrito } from "./CartWidget.module.css";
import cart from "./assets/pokeball.png";
import { pokebola } from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom"

const CartWidget = () => {
  const {totalQuantity}= useContext (CartContext)
  return (
    <div className={carrito}>
      <Link to ='/cart'>
      <img src={cart} className={pokebola} alt="Carrito" />
      {totalQuantity}
      </Link>
    </div>
  );
};
export default CartWidget;