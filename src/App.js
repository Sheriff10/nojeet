import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import { HTB } from './components/how_to_buy';
import Tokenomics from './components/tokenomics';
import Roadmap from './components/roadmap';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About/>
      <Tokenomics />
      <HTB />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
