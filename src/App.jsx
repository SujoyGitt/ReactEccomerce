
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import { About } from "./component/About/About";
import { Products } from "./component/Products/Products";
import { Contact } from "./component/Contact/Contact";
import { Singleproduct } from "./component/SingleProduct/Singleproduct";
import { Cart } from "./component/Cart/Cart";
import Error from "./component/Error/Error";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";

const App = ()=> {
  return(
     <BrowserRouter>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/singleproducts/:id" element={<Singleproduct/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
     <Footer/>
     </BrowserRouter>
   )
};
export default App;