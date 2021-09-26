import './App.css';
import  Navbar from "./components/nav"
import Jumbotron from './components/jumbotron';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return ( <div className="container">
    
    <Navbar />
    <Jumbotron />
    <Card />
    <Footer />
    
  </div>
  );
}


export default App;
