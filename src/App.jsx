import './App.css';

import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Name from './components/Name';
import Birthday from './components/Birthday';
import TryAgain from './components/TryAgain';
import Unlocked from './components/Unlocked';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/name" element={ <Name/> } />
            <Route path="/birthday" element={ <Birthday/> } />
            <Route path="/tryagain" element={ <TryAgain/> } />
            <Route path="/unlocked" element={ <Unlocked/> } />
        </Routes>
    </Router>
  );
}

export default App;