import './App.css';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import DonationForm from './pages/DonationForm/DonationForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donate" element={<DonationForm></DonationForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;