import { useCart } from "../../context/CartContext"

const Checkout = () =>{
    const {cart , total} =useCart()
    const createOrder = (userData) =>{
        const objOrder ={
            comprador: userData,
            items : cart,
            total
        }
    }
    return(
        <>
        <h1>Ya casi es tuyo</h1>
        <h2>Completa tus datos</h2>
        {/*formulario*/}
        <button> Generar orden </button>
        </>
    )
}

export default Checkout