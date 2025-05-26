// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./pages/Hero"));


function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Hero />} />
         
        </Routes>
      
    </>
  );
}

export default App;
