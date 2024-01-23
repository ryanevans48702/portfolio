import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

