import './App.css';
import Header from './components/Header';
import Efooter from './components/Efooter';
import Contact from './components/Contact';
import Roadmapsec from './components/Roadmapsec';
import Bearman from './components/Bearman'
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Supply from './components/Supply';
import Strategies from './components/Strategies';
import BaseStratgies from './components/BaseStratgies';
import Tokenomins from './components/Tokenomins';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Aos from 'aos';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000
      }
    );
    Aos.refresh()
  });
  return (
    <div>
      <Header />
      <Bearman />
      <Strategies />
      <Tokenomins />
      <Supply />
      <BaseStratgies />
      <Team />
      <Ecosystem />
      <Roadmapsec />
      <Contact />
      <Efooter />
    </div>
  );
}

export default App;
