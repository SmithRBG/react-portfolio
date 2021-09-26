import './App.css';
import  Navbar from "./components/nav"
import Jumbotron from './components/jumbotron';
import Card from './components/card';

function App() {
  return ( <div className="container">
    
    <Navbar />
    <Jumbotron />
    <Card />
    
  </div>
  );
}


export default App;
