import { Link } from "react-router-dom"

const Item = ( { producto } ) => {
    return (
        <Link to={'/detalle/'+producto.id}>
            <img src={producto.cover} alt="" />
            <p>{producto.title}</p>
            <p>{producto.price}</p>
        </Link>
    )
}

export default Item