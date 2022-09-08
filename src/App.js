
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div>
    <Router>
     <Navbar/> 
    
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/About' component={About} />
       <Route path='/Services' component={Services} />
       <Route path='/Contact' component={Contact} />
    
     </Switch>  
     <Footer/>
 
   </Router>
  
 
  
 </div>
  );
}

export default App;
