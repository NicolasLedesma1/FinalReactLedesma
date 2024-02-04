import { createContext , useState , useContext } from "react";


const CartContext = createContext({
    cart : [],
    addItem : ()=> {},
    removeItem : ()=> {},
    clearCart : ()=> {},

})

export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState ([])


    const addItem =(productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        }else{
            console.log('El producto ya fue agregado');
        }
    }

    const removeItem = (id) =>{
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart =(id) => {
        return cart.some (prod => prod.id === id)
    }

    const getTotalQuantity= () =>{
        let conteo = 0
        
        cart.forEach(prod => {
            conteo += prod.quantity
        })
    
        return conteo
      }

      const totalQuantity =getTotalQuantity()

      const getTotal =() =>{
        let conteo = 0
        
        cart.forEach(prod => {
            conteo += prod.quantity * prod.price
        })
    
        return conteo
      }

      const total = getTotal()
   
   return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )

}
export const useCart = () => {
    return useContext(CartContext)
}