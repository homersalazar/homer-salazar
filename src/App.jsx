import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from "aos";
import React, { useState, useEffect } from 'react';

function App() {
  AOS.init({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(loadingTimer);
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center">
        <div className="first-letter:loading-ui">
          <div className="ui-abstergo ">
            <div className="abstergo-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="ui-text">
              Homer Salazar
              <div className="ui-dot"></div>
              <div className="ui-dot"></div>
              <div className="ui-dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='overflow-x-hidden' style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header/>
        <Hero />
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact />
      <Footer />
    </div>
  )
}

export default App
