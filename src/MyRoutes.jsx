import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import TestNav from './TestNav'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/test' element={<TestNav/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='signup' element={<Register/>}/>
            <Route path='/productdetails/:product_id' element={<ProductDetails/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='cart' element={<Cart/>}/>  
          </Route>
          <Route path='context/api' element={<Show/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes