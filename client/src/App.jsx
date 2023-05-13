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
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  return <div>
     <Router>
      <Routes>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/success" element={<Success />} />

      </Routes>
     </Router>
    </div>;
};

export default App;