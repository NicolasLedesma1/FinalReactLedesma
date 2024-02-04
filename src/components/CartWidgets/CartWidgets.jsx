import { carrito } from "./CartWidget.module.css";
import pokeball from "./assets/pokeball.png";
import { pokebola } from "./CartWidget.module.css";
import {Link} from "react-router-dom"
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
  const {totalQuantity} = useCart()


  return (
    <div className={carrito}>
      <Link to ='/cart'>
      <img src={pokeball} className={pokebola} alt="Carrito" />
      {totalQuantity}
      </Link>
    </div>
  );
}
export default CartWidget;