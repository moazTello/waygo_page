import React,{ useState } from 'react'

const AddNewCom = () => {
  const [dodo,setDodo ] = useState('');
  const countries = [
    {
      id:1,
      country:"سوريا",
    },
    {
      id:2,
      country:"لبنان",
    },
    {
      id:3,
      country:"الاردن",
    },
    {
      id:4,
      country:"العراق",
    },
    {
      id:5,
      country:"فلسطين",
    },
    {
      id:6,
      country:"الامارات",
    },
    {
      id:7,
      country:"البحرين",
    },
    {
      id:8,
      country:"اليمن",
    },
    {
      id:9,
      country:"مصر",
    },
    {
      id:10,
      country:"الجزائر",
    },
    {
      id:11,
      country:"ليبيا",
    },
    {
      id:12,
      country:"المغرب",
    },
    {
      id:13,
      country:"السودان",
    },
    {
      id:14,
      country:"الصومال",
    },
    {
      id:15,
      country:"تونس",
    },
    {
      id:16,
      country:"تشاد",
    },
    {
      id:17,
      country:"السعودية",
    },
    {
      id:18,
      country:"عُمان",
    },
    {
      id:19,
      country:"الكويت",
    },
    {
      id:20,
      country:"قطر",
    },
  ]
  const bobo = (e) => {
    e.preventDefault();
    alert('send me a fucking data please !!!!!');
  }
  return (
    <div className='main_container'> 
        <div className='main_sard'>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`,paddingBottom:'20px',height:'fit-content'}}>
            <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>اضافة شركة</p>
           <form className='newclassform' onSubmit={bobo} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={dodo}
                        onChange={(e) => setDodo(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      الاسم
                    </label>
                </div>
                <div className='addInput'> 
                    <select className='inputs' 
                            style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                            onChange={(e) => setDodo(e.target.value)}> 
                    {countries?.map((country) => {
                        return <option 
                                        className='inputs' 
                                        key={country.id}>
                            {country.country}
                        </option>
                    })}
                </select>
                <label htmlFor='username' className='labellog'>
                      البلد
                </label>
                </div>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="phone"
                        type="date"
                        required
                        value={dodo}
                        onChange={(e) => setDodo(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      تاريخ صلاحية الاشتراك
                    </label>
                </div> 
                <div className='addInput'> 
                    <textarea
                        style={{border:`solid 1px rgb(74,153,233)`,color:'rgb(74,153,233)'}} 
                        className='inputs' 
                        id="description"
                        type="text"
                        required
                        value={dodo}
                        onChange={(e) => setDodo(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      وصف الشركة
                    </label>
                </div>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={dodo}
                        onChange={(e) => setDodo(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      السعر
                    </label>
                </div>
                <div className='addInput'> 
                    <select className='inputs' 
                            style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                            onChange={(e) => setDodo(e.target.value)}> 
                      <option>مفعل</option>
                      <option>غير مفعل</option>
                </select>
                <label htmlFor='username' className='labellog'>
                      التفعيل
                </label>
                </div>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(74,153,233)`,
                          marginTop:'10px'
                        }}>
                    ارسال
                    </button>
           </form>
      </div>
        </div>
    </div>
  )
}

export default AddNewCom