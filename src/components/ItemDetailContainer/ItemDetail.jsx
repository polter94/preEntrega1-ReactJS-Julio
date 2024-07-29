const ItemDetail = ( { producto } ) => {
    return (
        <div className="cardDetail">
            <div>
                <img src={producto.cover} alt="" />
                <p>{producto.title}</p>
                <p>{producto.price}</p>
            </div>
            <div>
                <p>{producto.desc}</p>
            </div>
        </div>
    )
}

export default ItemDetail