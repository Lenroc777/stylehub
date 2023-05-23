import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Pay from "./pages/Pay";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  const user = true;
  return <div>
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={ user ? <Navigate to='/' replace /> : <Login />}/>
        <Route path="/register" element={ user ? <Navigate to='/' replace /> : <Register />}/>
        <Route path="/success" element={<Success />} />


      </Routes>
     </Router>
    </div>;
};

export default App;