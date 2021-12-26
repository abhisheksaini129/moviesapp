
import Baaner from './Components/Baaner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
function App() {
  return (

   <Router>
   <Navbar/>
   <Routes>
    <Route path='/'  element={<Movies/>}/>
    <Route path='/' element={<Baaner/>}/>
     
    <Route path='/fav' element={<Favourite/>}/>
   </Routes>
  
  </Router>  
    
  );
}

export default App;
