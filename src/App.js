import './App.css';
import './pages/AllApp.css';
import Layout from './Components/Navbar/Layout';
import { Route,Routes } from 'react-router-dom';
import Missing from './pages/Missing';
import { DataProvider } from './context/Datacontext';
import HomePage from './pages/HomePage';


function App() {
  return (
    <DataProvider>
      <Routes>
          <Route path='/' element={<Layout/>}>
            {/* <Route index element={<HomePage/>}/> */}
            <Route path='/waygo_page' element={<HomePage/>}/>
            <Route path='*' element={<Missing/>}/>
          </Route>
      </Routes>  
    </DataProvider>
  );
}

export default App;
// https://way-go.vercel.app/createAdminForAllProject
// {
//   "email":"yaser@waygo"  ,
//   "password":"@yaser@"  ,
//   "firstName":"yaser" ,
//   "lastName": "alsamsam" ,
//   "phone":  "0991810721"   ,
//   "accountType":"admin"
//   }
// npm install i18next react-i18next

// echo "# waygo_page" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/moazTello/waygo_page.git
// git push -u origin main

// git remote add origin https://github.com/moazTello/waygo_page.git
// git branch -M main
// git push -u origin main