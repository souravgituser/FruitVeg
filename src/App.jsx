
import './assets/css/custom.css'
import './assets/css/custom-inner.css'

import AppRoutes from "./routes/AppRoutes";
//import AboutUs from './components/page/about.jsx'
import { BrowserRouter } from "react-router"
import { CartProvider } from './components/contextAPI/CartContext';



function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <AppRoutes/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
