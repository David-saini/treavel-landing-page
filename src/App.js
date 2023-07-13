import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import './index.js'
import './assets/css/root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';
import Section_6 from './components/Section_6';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
    </div>
  );
}

export default App;
