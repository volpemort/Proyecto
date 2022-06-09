import ItemCount from "../Count/ItemCount"
import { useState } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const CardDetail = ({data}) =>{
    const [showButton, setShowButton] = useState(false)

    const onAdd = ( count) =>{
        
        console.log(count)
        setShowButton(true)
        
        
    }

    return(
        <div className="detailBox">
            <div className="">
                <img src={`../${data.image}`}></img>
            </div>
            <div className="">
                <h1>{data.title} </h1>
                <p> Precio $ {data.price}</p>
                <span>Stock {data.stock}</span>
                
                {!showButton ?
                <ItemCount stocks={data.stock} onAdd={onAdd} setShowButton={setShowButton}></ItemCount>
                :
                <Button> <Link to='/cart'>Finalizar Compra</Link></Button>}
            </div>
        </div>
    )
}

export default CardDetail