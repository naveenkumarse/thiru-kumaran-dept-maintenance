
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/login';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Line from './components/line/line';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/login" element={
            <div>

              <LoginPage />
            </div>
          } />
          <Route path="/" element={
            <div>
            
              <Navbar />
              <Home />
            </div>
          } />
          <Route path="/line" element={
            <div>
           
              <Navbar />
              <Line/>
            </div>
          } />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
