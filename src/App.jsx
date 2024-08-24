import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FarmerLogin from './Components/Authentication/FarmerLogin';
import FarmerRegistration from './Components/Authentication/FarmerRegistration';
import CustomerLogin from './Components/Authentication/CustomerLogin';
import CustomerRegister from './Components/Authentication/CustomerRegister';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/farmerLogin' element={<FarmerLogin/>} /> 
        <Route path='/farmerRegister' element={<FarmerRegistration />} />
        <Route path='/customerLogin' element={<CustomerLogin />} />
        <Route path='/customerRegister' element={<CustomerRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
