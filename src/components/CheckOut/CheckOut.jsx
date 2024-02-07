import { useState } from "react"
import { useCart } from "../../context/CartContext"
import {db} from "../../services/firebase/firebaseConfig"
import {addDoc ,collection, getDocs, where, query , documentId, writeBatch } from "firebase/firestore"
import {formulario, detalle, detalle2, boton} from "./CheckOut.module.css"



const Checkout = () =>{
    const [orderId, setOrderId] = useState(null)
    const [userData , setUserData]= useState({nombre: "",
                                            apellido: "",
                                            telefono: ""
    });
    
    const {cart , total, clearCart} =useCart()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData, [name] : value
        }));
      };
    
      const createOrder =  async (userData) =>{
        const objOrder ={
            comprador: userData,
            items : cart,
            total
        }

        const batch = writeBatch(db)
        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsCollection = query(collection(db, 'products'), where (documentId(), 'in', ids))
        

        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc =>{
            const fields = doc.data()
            const stockDb = fields.stock

            const productsAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsAddedToCart.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref,{ stock: stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id, ...fields})
            }
        })
        if(outOfStock.length === 0){
            batch.commit()
            
            const orderCollection = collection(db,'orders')

            const {id} = await addDoc(orderCollection, objOrder) 
            setOrderId(id)

            clearCart()
        } else {
            console.log('error no hay productos disponibles');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder(userData);
      };
    if(orderId){
        return <h1>el id de su compra es: {orderId}</h1>
    }
    return(
        <>
        <h1>Ya casi es tuyo</h1>
        <h2>Completa tus datos</h2>
        <form onSubmit={handleSubmit} className={formulario}>
            <div>
              <label className={detalle} htmlFor="nombre">Nombre:</label>
              <input className={detalle2} type="text" id="nombre" name="nombre" value={userData.nombre} onChange={handleInputChange} required/>
            </div>
            <div>
              <label className={detalle} htmlFor="apellido">Apellido:</label>
              <input className={detalle2} type="text" id="apellido" name="apellido" value={userData.apellido} onChange={handleInputChange} required/>
            </div>
            <div>
              <label className={detalle} htmlFor="telefono">Teléfono:</label>
              <input className={detalle2} type="tel" id="telefono" name="telefono" value={userData.telefono} onChange={handleInputChange} required/>
            </div>
            <button className={boton} type="submit">Generar orden</button>
        </form>

        </>
    )
}

export default Checkout