
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';


function App() {
  return (
    <>
  
        <Navbar />
      
    <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>
    
    </>
  );
}

export default App;
