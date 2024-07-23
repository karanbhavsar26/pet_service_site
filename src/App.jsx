import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProtectedRoutes from './layout'
import Home from './home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './categories'

function App() {

  return (
    <>
<BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Categories />} path="/categories"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
          </>
  )
}

export default App
