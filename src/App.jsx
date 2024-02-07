import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOut/CheckOut';
import { NotificationProvider } from './notificaciones/Notificaciones';




function App() {
  return (
    <>
      <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Elegis el pokemon, nosotros hacemos el cuadro '} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Pokemones de tipo '}/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1> 404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </NotificationProvider>
      </BrowserRouter>
      </>
  );
}

export default App;