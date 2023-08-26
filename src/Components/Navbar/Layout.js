import React, { useContext } from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import DataContext from '../../context/Datacontext';

const Layout = () => {
  const { isLogedIn } = useContext(DataContext);

  return (
    <div className='App'>
        {isLogedIn && <Navbar/>}
        <Outlet/>
    </div>
  )
}

export default Layout