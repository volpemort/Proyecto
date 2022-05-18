import React from "react"
import "./CardItem.css"
import  Card from "@mui/material/Card"
import  CardContent from "@mui/material/CardContent"
import  Button from "@mui/material/Button"


const CardItem = (props) => {
    return (
        <Card sx={{ minWidth:275 }} > 
            <CardContent >
                <div className="cardStyle" >
                    <div>
                        <img src={`./${props.image}`}/>
                    </div>
                    <p>{props.title}</p>
                    <span>{props.price}</span>
                    <Button variant="contained">Detalle</Button>
                </div>
            </CardContent>
            
            
        </Card>
    )
}

export default CardItem