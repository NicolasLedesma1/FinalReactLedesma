import { useState } from "react";
import {contador} from "./ItemCount.module.css"
import {boton}  from "./ItemCount.module.css"

const ItemCount = ({stock, inicial, onAdd}) => {
    const[cantidad, contarCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock){
        contarCantidad(cantidad+1)
    }
}

    const decrementar = () => {
        if(cantidad > 1){
        contarCantidad(cantidad-1)
    }
}
    return(
        <>
        <div className={contador}>
        <button className={boton} onClick={decrementar}> - </button>
        <h4 className='numero'>{cantidad}</h4>
        <button className={boton} onClick={incrementar}> + </button>
        </div>
        <div >
            <button className='button' onClick={() => onAdd(cantidad)} disabled={!stock}>
                Atrapar Pokemon
            </button>
        </div>
        </>
    )
}
export default ItemCount
