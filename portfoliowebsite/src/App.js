
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Layout/Navbar';
import AllPage from './Components/Pages/AllPage';



function App() {
  return (
    <>
  
    <Navbar />
    <Routes>
       <Route path='/' element={<AllPage/>}/>

    </Routes>
    
    </>
  );
}

export default App;
