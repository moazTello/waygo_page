import './App.css';
import './pages/AllApp.css';
import Layout from './Components/Navbar/Layout';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Missing from './pages/Missing';

import { DataProvider } from './context/Datacontext';
import HomePage from './pages/HomePage';
import ShowAllCom from './pages/ShowAllCom';
import Financial from './pages/Financial';
import EmploymentOrders from './pages/EmploymentOrders';
import CurrentOffers from './pages/CurrentOffers';
import AddNewOffer from './pages/AddNewOffer';
import AddNewCom from './pages/AddNewCom';

function App() {
  return (
    <DataProvider>
      <Routes>
          <Route path='/waygo' element={<Layout/>}>
            {/* <Route index element={<HomePage/>}/> */}
            <Route path='/waygo' element={<Login/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/addnewcom' element={<AddNewCom/>}/>
            <Route path='/addnewoffer' element={<AddNewOffer/>}/>
            <Route path='/currentoffers' element={<CurrentOffers/>}/>
            <Route path='/employmentorders' element={<EmploymentOrders/>}/>
            <Route path='/financial' element={<Financial/>}/>
            <Route path='/showallcom' element={<ShowAllCom/>}/>
            <Route path='*' element={<Missing/>}/>
          </Route>
      </Routes>  
    </DataProvider>
  );
}

export default App;
