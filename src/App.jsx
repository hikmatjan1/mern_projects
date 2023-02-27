import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Home = lazy(() => import("./pages/home/Home"));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='loading'><div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div></div>
      }>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
