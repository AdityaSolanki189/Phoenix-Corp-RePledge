import './App.css';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import {Routes, Route} from "react-router-dom";
import DonationForm from './pages/DonationForm/DonationForm';
import Volunteer from './pages/Volunteer/Volunteer';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import HostDriveForm from './pages/HostDriveForm/HostDriveForm';
import SignUp from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import PrivateRoute from "./routes/PrivateRoute"
import MyDrives from './pages/MyDrives/MyDrives';
import MyDonations from './pages/MyDonations/MyDonations';
import VolunteeredEarlier from './pages/VolunteeredEarlier/VolunteeredEarlier';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donate" element={<DonationForm></DonationForm>}></Route>
        <Route path="/volunteer" element={<Volunteer></Volunteer>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {/* <PrivateRoute 
                path="/home" 
                element={<Home/>}>
            </PrivateRoute> */}
        <Route path="/my_drives" element={<MyDrives/>}></Route>
        <Route path="/my_donations" element={<MyDonations/>}></Route>
        <Route path="/Volunteered" element={<VolunteeredEarlier/>}></Route>
      </Routes>
    </div>
  );
}

export default App;