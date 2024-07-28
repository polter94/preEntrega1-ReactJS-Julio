import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<ItemListContainer saludo="Saludos, esta en el inicio"/>} />
      <Route path="/categorias/:idCategoria" element={ <ItemListContainer saludo={" se ingreso a la ruta: ???"}/> } />
    </Routes>

    </BrowserRouter>
  )
}

export default App;