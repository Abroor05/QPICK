import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import SignIn from './pages/signIn/SignIn'
import Login from './pages/login/Login'
import LoginModal from './components/loginModal/LoginModal'

function App() {
  const [count, setCount] = useState(0)
  const [loginModal, setLoginModal] = useState(false)

  

  return (
    <>
      <BrowserRouter>
       
        {loginModal ? <LoginModal/> : ""}
        <Navbar setLoginModal={setLoginModal}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
