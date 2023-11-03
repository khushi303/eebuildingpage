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

function App() {
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
