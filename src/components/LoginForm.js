import React,{ useState } from 'react'
import Captcha from './captcha';

function LoginForm({Login,error}) {
    const [details,setDetails] = useState({name: "",password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)

    }

  return (

    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <img src="/images/11.png" alt="image"/>
            {(error !=="")?(<div className="error">{error}</div>) : ""}
        
            <div className="form-group">
            <label htmlFor="name">USERNAME: </label>
            <input type ="text" name="name" id="name" placeholder='Enter Username' onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">PASSWORD: </label>
                <input type ="password" name="password" id="password" placeholder='Enter Password' onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
            </div>
            
            {/* <img  src="/images/123-modified.png" alt="fingerprint" width="5px" height="5px"/> */}
        
                <Captcha/>

{/* 
            <div className="forms"> */}
          <div className='child1'><input type="submit" value="LOGIN" /></div>
            {/* <div className='child2'><p>Register</p></div> */}
            {/* </div> */}
            </div>
            

            
    </form>
    
  )
}

export default LoginForm;
