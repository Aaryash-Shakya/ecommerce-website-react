import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import TestNav from './TestNav'
import Login from './pages/Login'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/test' element={<TestNav/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default MyRoutes