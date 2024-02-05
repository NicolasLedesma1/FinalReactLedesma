import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() =>{
        
        getProducts(categoryId)
            .then(products =>{
                setProducts(products)
            })
            .catch(error =>{
                console.log('Error' , 'hubo un error');
            })
    }, [categoryId])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products= {products}/>
        </div>
    )
}

export default ItemListContainer