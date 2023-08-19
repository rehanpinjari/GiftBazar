import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Pages/Home.js';
import ComingSoon from '/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Pages/ComingSoon/ComingSoon.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;

