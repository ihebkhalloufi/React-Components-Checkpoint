
import './App.css';
import './Component/Profile/Address/Address'
import FullName from './Component/Profile/FullName/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto'
import MainNavbar from './Component/Profile/Navbar/MainNavbar';
import Address from './Component/Profile/Address/Address';
function App() {
  return (
    <div className="App">
     <MainNavbar/>
     <ProfilePhoto/>  
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
