import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import TestNav from './TestNav'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'
import Cart from './pages/Cart'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/test' element={<TestNav/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/productdetails/:product_id' element={<ProductDetails/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='Cart' element={<Cart/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default MyRoutes