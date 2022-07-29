import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const adminUser ={
      password:"admin123"
    }
    const[user, setUser] = useState({name: "",password: ""});
    const[error, setError] = useState("");

    const Login = details => {
      console.log(details);

      if(details.password===adminUser.password )
      {
        console.log("Logged in");
        setUser({
          name:details.name,
        })
      }
      else
      {
        console.log("Details do not match!");
        setError("Details do not match");

      }
    }
    const Logout = ()=>{
      setUser({name: "",password: "" });

    }
    return(
      <div className="App">
        {(user.password !=="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        ):(
          <LoginForm Login={Login} error={error}/>
        )}
      </div>
    );

}

export default App;
