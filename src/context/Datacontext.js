import { createContext, useState} from "react";
import { useNavigate
// , Location, Link
 } from 'react-router-dom';
// import axios from '../api/DataTrans';

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [ password,setPassword ] = useState('aa');
  const [ userName,setUserName ] = useState('moaz');
  const [ isLogedIn,setIsLogedIn ] = useState(false);

  const handleSubmitlogin = () => {
    if(password === 'aa' && userName === 'moaz'){
        setIsLogedIn(true);
        navigate('/home');
    }
  }
  const logout = () => {
    setIsLogedIn(false);
    navigate('/waygo');
  }

    return(
        <DataContext.Provider value={{
            userName,setUserName,password,setPassword,isLogedIn,handleSubmitlogin,logout
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;