import { createContext, useState} from "react";
// import { useNavigate
// , Location, Link
//  } from 'react-router-dom';

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [lang,setLang] = useState(false)

    return(
        <DataContext.Provider value={{
          lang,setLang
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;
// moaz ==»» {
//   "email":"yaser@waygo"     ,
//   "password":"@yaser@"  ,
//   "firstName":"yaser" ,
//   "lastName": "alsamsam" ,
//   "phone":  "0991810721"   ,
//   "accountType":"admin"
//   }  هي حساب لمعاذ مشان يبلش شغل