import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer saludo="bienvenidos a nuestro e-shop" />
    </>
  )
}

export default App
