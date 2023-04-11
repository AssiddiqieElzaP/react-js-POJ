import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Discovery from './pages/discovery';
import Destination from './pages/destination';
import DestinationDetail from './pages/destinationDetail';
import Package from './pages/package';
import PrivateTripDetail from './pages/privateTripDetail';
import OpenTripDetail from './pages/openTripDetail';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' Component={Discovery}/>
        <Route path='/destination' Component={Destination}/>
        <Route path='/destination-detail' Component={DestinationDetail}/>
        <Route path='/private-trip-detail' Component={PrivateTripDetail}/>
        <Route path='/open-trip-detail' Component={OpenTripDetail}/>
        <Route path='/package' Component={Package}/>
        <Route path='/about-us' Component={About}/>
      </Routes>
      {/* <Discovery/> */}
    </div>
  );
}
export default App;
