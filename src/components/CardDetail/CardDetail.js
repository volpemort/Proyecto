import ItemCount from "../Count/ItemCount"

const CardDetail = ({data}) =>{
    return(
        <div className="detailBox">
            <div className="">
                <img src={`../${data.image}`}></img>
            </div>
            <div className="">
                <h1>{data.title} </h1>
                <p> Precio $ {data.price}</p>
                <span>Stock {data.stock}</span>
                <ItemCount ></ItemCount>
            </div>
        </div>
    )
}

export default CardDetail