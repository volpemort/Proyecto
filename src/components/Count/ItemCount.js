import React from "react"
import "../Cards/CardItem.css"
import  Button from "@mui/material/Button"
import { useState } from "react"

const ItemCount = ({stocks , onAdd}) => {
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(0)

    const addCount = () =>{
        console.log (stocks)

        if (stock < stocks){
            setCount(count+1)
            setStock (stock+1)
        }
        
    }
    const minusCount =() =>{
        if (count > 0){
            setCount(count-1)
        }
        
    }
    return(
        <div className="count-Item">
                        <Button onClick={addCount}>+</Button>
                        <p>{count}</p>
                        <Button  onClick={minusCount}>-</Button>
                        <Button  onClick={() => onAdd(count)}>comprar</Button>
                        
        </div>
    )
}

export default ItemCount