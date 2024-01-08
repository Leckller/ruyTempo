import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Current from './pages/Current';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/current/:loc" element={ <Current /> } />
    </Routes>
  );
}

export default App;
