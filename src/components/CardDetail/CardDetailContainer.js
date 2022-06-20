

import { useEffect, useState} from "react"
import { useParams } from "react-router";
import productos from "../../Data/ProductsMock"
import CardDetail from "./CardDetail";
import fireDataB from "../../Data/FireBaseConfig"
import {doc, getDoc } from "firebase/firestore" 


const CardDetailContainer = () => {
  
    const {id} = useParams()
    const [product, setProduct] = useState({})
  
  const getProduct =async () =>{
    const docRef = doc(fireDataB, "productos", id)
    const docSnapShot = await getDoc(docRef)
    let productData = docSnapShot.data()
    productData.id = docSnapShot.id
    return productData
  }


  
    useEffect (() => {
      getProduct()
      .then((response) =>{
        console.log("Respuesta product:", response)
        setProduct (response)
      })
      
          
    },[id])
    

   
      return(
          <div>
            <div>
                <CardDetail data={product} ></CardDetail>
            </div>
            
          </div>
            )
  
          }
          export default CardDetailContainer