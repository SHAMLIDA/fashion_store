
import { Route, Routes } from 'react-router'
import './App.css'
import Card from './pages/Card'
import Wshlist from './pages/Wshlist'
import Home from './pages/Home'
import Footer from './Components/Footer'
import View from './pages/View'
import { Navigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';















function App() {

  return (
    <>
 
  <Routes>
  <Route element={ <Home/>} path='/' />
  <Route element={<Wshlist/>} path='/wshlist' />
  <Route element={ <Card/>} path='/card' />
  <Route element={ <View/>} path='/:id/View' />
  <Route element={<Navigate to={'/'}/>} path='/*' />




  </Routes>
  <Footer/>
 

    </>
  )
}

export default App
