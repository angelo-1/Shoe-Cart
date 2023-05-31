import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />}/>
      <Route path="/cart" element={<Cart />}/>

    </Routes>
   </Router>
   </>
  );
}

export default App;
