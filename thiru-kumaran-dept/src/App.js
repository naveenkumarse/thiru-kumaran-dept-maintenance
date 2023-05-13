
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/login';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Line from './components/line/line';
import LineBoy from './components/line_boy/lineBoy';
import LineCreate from './components/lineCreate/lineCreate';


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
           <Route path="/lineboy" element={
            <div>
             <LineBoy />
            </div>
          } />
          <Route path="/linecreate" element={
            <div>
               <Navbar />
             <LineCreate />
            </div>
          } />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
