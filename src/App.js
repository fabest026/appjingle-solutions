import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Hero from './components/UI/Hero'
// import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Footer from './components/Footer/Footer';
import Contact from './components/UI/Contact';

function App() {
   
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return <>
    <Header theme={theme} toggleTheme={toggleTheme}  />
    <Hero theme={theme} />
    {/* <Counter /> */}
    <Services />
    <About />
    <Contact />
    <Footer />
  </>
}

export default App;
