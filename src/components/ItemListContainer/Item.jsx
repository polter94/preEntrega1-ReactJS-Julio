const Item = ( { producto } ) => {
    return (
        <div>
            <img src={producto.cover} alt="" />
            <p>{producto.title}</p>
            <p>{producto.price}</p>
        </div>
    )
}

export default Item