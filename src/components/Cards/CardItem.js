import React from "react"
import "./CardItem.css"
import  Card from "@mui/material/Card"
import  CardContent from "@mui/material/CardContent"
import  Button from "@mui/material/Button"
import ItemCount from "../Count/ItemCount" 
import { Link } from "react-router-dom"



const CardItem = ({title, image, price, stock, id}) => {

    const onAdd = ( count) =>{
        
        console.log(count)
        
    }

    return (
        
        <Card sx={{ minWidth:275 }} > 
            <CardContent >
                <div className="cardStyle" key={id}>
                    <div className="imgBox">
                        <img src={`/${image}`}/>
                    </div>
                    <div className="cardBox">
                        <p>{title}</p>
                        <span>${price}</span>
                    </div>
                    <ItemCount stocks={stock} onAdd={onAdd}></ItemCount>
                    
                    <Button variant="contained" ><Link  className='linksItem' to={`/products/${id}`}>Detalle</Link></Button>
                    
                </div>
            </CardContent>
            
            
        </Card>
    )
}

export default CardItem