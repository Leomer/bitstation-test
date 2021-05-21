import './App.css';
import Navegation from './components/Navegation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {
  return (
    <Router>
      <Navegation/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
