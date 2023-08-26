import React, { useContext } from 'react'
import Login_logo from '../images/Login_logo.svg';
import DataContext from '../context/Datacontext';
const Login = () => {
    const {userName,setUserName,password,setPassword,handleSubmitlogin} = useContext(DataContext);
  return (
    <div className='main_container' style={{backgroundColor: "rgb(35,56,98)"}}>
        <div className='login_page'>
            <img src={Login_logo} alt='logo' className='Login_logo'/>

            <div className='loginbox' style={{border:`solid 1px rgb(64,91,131)`}}>
                <p style={{color:"rgb(64,91,131)",fontSize:'16px'}}>تسجيل الدخول</p>
           <form className='newclassform' onSubmit={handleSubmitlogin}>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(64,91,131)',color:'rgb(64,91,131)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      اسم المستخدم
                    </label>
                </div> 
                <div className='addInput'> 
                    <input
                        style={{border:`solid 1px rgb(64,91,131)`,color:'rgb(64,91,131)'}} 
                        className='inputs' 
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      كلمة المرور 
                    </label>
                </div>
                <div className='addInput' style={{alignItems:'center',marginTop:'30px',fontSize:'12px',width:'100%'}}>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(64,91,131)`,
                        }}>
                    تسجيل الدخول
                    </button>
                </div>           
           </form>
      </div>
        </div>
    </div>
  )
}

export default Login