import { Link } from "react-router-dom"

const Item = ( { producto } ) => {
    return (
        <Link to={'/detalle/'+producto.id}>
            <div className="cardS" >
            <img src={producto.cover} alt="" />
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            </div>
        </Link>
    )
}

export default Item