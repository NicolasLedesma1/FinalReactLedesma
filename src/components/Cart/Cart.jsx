import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"




const Cart =() =>{
    const {cart, clearCart, totalQuantity, total} =useContext(CartContext)
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
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3> Total : ${total} </h3>
            <button onClick={() => clearCart()}> Vaciar Carrito </button>
            <Link to ='checkout'> Checkout</Link>
        </>
    )
}

export default Cart