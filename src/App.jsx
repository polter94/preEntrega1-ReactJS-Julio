import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<ItemListContainer saludo="fsjal"/>} />
      <Route path="/categorias/:idCategoria" element={ <ItemListContainer saludo={" se ingreso a una ruta"} /> } />
    </Routes>

    </BrowserRouter>
  )
}

export default App
