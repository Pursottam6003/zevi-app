import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


import { Home } from './pages'
// import "./assets/styles/app.scss";


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<h1>hello home</h1>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App