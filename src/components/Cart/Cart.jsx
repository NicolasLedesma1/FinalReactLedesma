import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import {cartItem} from "./cart.module.css"




const Cart =() =>{
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    if (totalQuantity === 0){
        return (
            <>
                <h1>No hay items en el carrito</h1>
                <Link to='/'> Productos </Link>
            </>
        )
    }
    return(
        <>
        <h1>Carrito</h1>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className={cartItem} >
                                <h2>{prod.nombre}</h2>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio unidad: ${prod.price}</h3>
                                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            <h3> Total : ${total} </h3>
            <button onClick={() => clearCart()}> Vaciar Carrito </button>
            <Link to ='checkout'> Checkout</Link>
        </>
    )
}

export default Cart