import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getProductById } from "../../services/firebase/firestore/products"
import {atrapar} from './ItemDetailContainer.module.css'
import { useNotification } from "../../notificaciones/Notificaciones";


const ItemDetailContainer = () => {
    const [loading,setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const {showNotification} = useNotification()
    const { itemId } = useParams ()

    useEffect(() => {
        setLoading (true)

        getProductById(itemId)
            .then(product =>{
                setProduct(product)
            })
            .catch(error =>{
                showNotification('error' ,'Error al buscar el Pokemon')
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [itemId])
    if(loading){
        return <h1>Buscando Pokemon</h1>
    }

    if(!product){
        return <h1>El Pokemon se escapo</h1>
    }

    return(
        <div> 
            <h2 className={atrapar}>Atrápalo!</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer