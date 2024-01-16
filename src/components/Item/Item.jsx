import { CardItem ,ItemImg,ItemHeader } from "./Item.module.css";


const Item = ({ id, nombre, img, price, stock }) => {
  return (
    <article className={CardItem}>
      <header >
        <h2 className={ItemHeader}> {nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className={ItemImg} />
      </picture>
      <section>
        <p> Precio ${price} </p>
        <p> Stock Disponible: {stock}</p>
      </section>
      <footer >
        <button > Ver Detalle </button>
      </footer>
    </article>
  );
};

export default Item;
