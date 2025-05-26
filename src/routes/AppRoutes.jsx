import React from 'react';
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
 
    </Routes>
  );
}
