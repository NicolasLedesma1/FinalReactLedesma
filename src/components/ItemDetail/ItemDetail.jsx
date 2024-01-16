import ItemCount from "../ItemCount/ItemCount";
import { CardItem ,ItemImg,ItemHeader } from "./ItemDetail.module.css";

const ItemDetail = ({ id, nombre, img, price, description }) => {
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
          <p> Descripcion: {description} </p>
        </section>
        <footer >
        <ItemCount inicial ={1} stock ={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </footer>
      </article>
    );
  };

export default ItemDetail