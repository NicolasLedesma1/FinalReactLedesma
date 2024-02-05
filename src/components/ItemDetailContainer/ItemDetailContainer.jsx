import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import {getDoc , doc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect(() => {
        const productDocument = doc(db, 'products', itemId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot =>{
                const fields =queryDocumentSnapshot.data()
                const productAdapted ={id : queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error =>{
                console.log('Hubo un error');
            })

    }, [itemId])
    
    return(
        <div> 
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer