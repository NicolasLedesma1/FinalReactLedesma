import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useNotification } from "../../notificaciones/Notificaciones";
const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    const {showNotification} = useNotification()

    useEffect(() =>{
        if(categoryId) document.title = 'PokeSquares: ' + categoryId
        return ()=> {
            document.tittle = 'PokeSquares'
        }
    })
    
    useEffect(() =>{
        setLoading(true)
        
        getProducts(categoryId)
            .then(products =>{
                const sortedProducts = products.sort((a, b) => a.order - b.order);
                setProducts(sortedProducts);
            })
            .catch(error =>{
                showNotification('error' ,'Error al buscar los Pokemons')
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <h1> Buscando Pokemones ... </h1>
    }
    return(
        <div>
            <h1>{greeting + (categoryId ?? '')}</h1>
            <ItemList  products= {products}/>
        </div>
    )
}

export default ItemListContainer