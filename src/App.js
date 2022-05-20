import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import './globla.module.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login/*' element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
