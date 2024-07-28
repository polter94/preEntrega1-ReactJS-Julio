import { useState , useEffect } from "react"
import obtenerProductos from "../../data/data"

const itemListContainer = ( { saludo } ) => {
  const [productos, setProductos] = useState([]);

  useEffect (() => {
    obtenerProductos()
    .then ((respuesta) => {
      setProductos (respuesta);
    })
    .catch ((error) => {
      console.error(error);
    })
    .finally (() => {
      console.log("promesa prometida");
    });
  }, []);

  return (
    <div>
        <p>{saludo}</p>
        {
          productos.map( (producto) => (
            <div key={producto.id}>
              {/* <img src={producto.cover} alt="" /> */}
              <p>{producto.title}</p>
              <p>{producto.price}</p>
            </div> ) )
        }
    </div>
  )
}

export default itemListContainer;