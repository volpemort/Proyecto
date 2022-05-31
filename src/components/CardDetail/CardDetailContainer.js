

import { useEffect, useState} from "react"
import { useParams } from "react-router";
import productos from "../../Data/ProductsMock"
import CardDetail from "./CardDetail";



const CardDetailContainer = () => {
  
    const {id} = useParams()
    const [product, setProduct] = useState({})
  
    
    // const getItem = () =>{
    //   return new Promise ((resolve, reject) =>{
    //     // setTimeout(() => {
    //       resolve(producto)
    //     // }, 2000);
        
    //   })
    // }
  
    useEffect (() => {
      
    setProduct( productos.find((product) =>{
      return product.id == id
    }))
      // getItem()
      // .then((response) =>{
      //       console.log("Respuesta promesa:", response)
      //       setProduct (response)
      //     })
          
    },[])
    
  
      return(
          <div>
            <div>
                <CardDetail data={product} ></CardDetail>
            </div>
            
          </div>
            )
  
          }
          export default CardDetailContainer