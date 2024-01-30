import { CardItem ,ItemImg,ItemHeader,detalle } from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, img, price, stock, category}) => {
  
  return (
    <article className={CardItem}>
      <header >
        <h2 className={ItemHeader}> {nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className={ItemImg} />
      </picture>
      <section>
        <p> categoria: {category}</p>
        <p> Precio ${price} </p>
        <p> Stock Disponible: {stock}</p>
      </section>
      <footer >
        <Link to={`/item/${id}`} className= {detalle}> ver detalle </Link>
      </footer>
    </article>
  );
};

export default Item;
