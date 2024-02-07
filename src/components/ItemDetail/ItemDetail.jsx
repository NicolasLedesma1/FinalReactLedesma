import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CardItem ,ItemImg,ItemHeader } from "./ItemDetail.module.css";
import {Link} from 'react-router-dom'
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notificaciones/Notificaciones";

const ItemDetail = ({ id, nombre, img, price, description, stock }) => {
  const [quantityAdded, SetQuantityAdded] = useState(0)

  const {addItem} = useCart ()

  const {showNotification} = useNotification()
  const handleOnAdd = (quantity) => {
    SetQuantityAdded(quantity)
    const objProductToAdd ={
      id,nombre,price,quantity
    }

    addItem(objProductToAdd)
    showNotification('Felicidades',`Capturaste ${quantity} ${nombre}`)
  }
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
          <p> stock : {stock} </p>
        </section>
        <footer >
        {
          quantityAdded === 0 ? (
            <ItemCount inicial ={1} stock ={stock} onAdd={handleOnAdd}/>

          ) : (
            <Link to = '/cart'> Terminar compra </Link>
            )
        }
        </footer>
      </article>
    );
  };

export default ItemDetail