import Home from "./Pages/Home";
import Productpage from "./Pages/Productpage";
import Productlist from "./Pages/Productlist";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Product from "./Components/Product";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return <>
 

    <Router>
      <Routes>
      <Route path="/" element = {user ? <Navigate to="/home" /> : <Signin />}></Route>
        {/* <Route path="/" element={<Signin />}/> */}
        <Route path="/home" element={<Home />}/>
        <Route path="/products/:category" element={<Productlist />}/>
        <Route path="/cart" element={<Cart/>}/>
        
        <Route path="/register" element={<Signup/>}/>
        <Route path="/product/:id" element={<Productpage/>}/>
      </Routes>
    </Router>

    {/* <Home /> */}
    {/* <Productlist/> */}
    {/* <Productpage/> */}
    {/* <Signup/> */}
    {/* <Signin/> */}
    {/* <Cart/> */}
  </>
};

export default App;