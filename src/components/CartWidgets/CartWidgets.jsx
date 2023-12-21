import { carrito } from "./CartWidget.module.css";
import cart from "./assets/pokeball.png";
import { pokebola } from "./CartWidget.module.css";
const CartWidget = () => {
  return (
    <div className={carrito}>
      <img src={cart} className={pokebola} alt="Carrito" />
      <span>0</span>
    </div>
  );
};
export default CartWidget;