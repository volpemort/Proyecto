import React from "react"
import "../Cards/CardItem.css"
import  Button from "@mui/material/Button"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({stocks , onAdd, setShowButton}) => {
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(1)
    

    const addCount = () =>{
        console.log (stocks)

        if (stock < stocks){
            setCount(count+1)
            setStock (stock+1)
        }
        
    }
    const minusCount =() =>{
        if (count > 1){
            setCount(count-1)
            setStock (stock-1)
        }
        
    }
    return(
        <>
        <div className="count-Item">
                        <Button onClick={addCount}>+</Button>
                        <p>{count}</p>
                        <Button  onClick={minusCount}>-</Button>
                        <Button  onClick={() => setShowButton(true)}>Agregar Prooducto</Button>
                        
        </div>
        
        
        </>
    )
}

export default ItemCount