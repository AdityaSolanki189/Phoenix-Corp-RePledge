import './App.css';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import DonationForm from './pages/DonationForm/DonationForm';
import Volunteer from './pages/Volunteer/Volunteer';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donate" element={<DonationForm></DonationForm>}></Route>
        <Route path="/volunteer" element={<Volunteer></Volunteer>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        {/* <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route> */}


      </Routes>
    </div>
  );
}

export default App;