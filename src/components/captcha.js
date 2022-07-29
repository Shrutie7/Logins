import 'bootstrap/dist/css/bootstrap.min.css';
import captchaImg from './captcha.jpg';
import React, { useState, useEffect } from 'react';

function Captcha() {

  const [user, setUser] = useState({
      username:""
  });

  const characters ='abc123';

  function generateString(length) 
  {
      let result = '';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
     return result;
   }

   const captcha = generateString(6) // Function called here and save in captcha variable

   let handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     user[name] = value;
     setUser(user);
  }

  const onSubmit = e => {

    var element =  document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
     element.style.cursor = "wait";
     element.innerHTML  = "Checking...";
     inputData.disabled = true;
     element.disabled = true;

      var myFunctions = function(){
          if(captcha == user.username)
          {
            element.style.backgroundColor   = "green";
            element.innerHTML  = "Captcha Verified";
            element.disabled = true;
            element.style.cursor = "not-allowed";
            inputData.style.display = "none";
            
          }
          else
          {
            element.style.backgroundColor   = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML  = "Not Matched";
            element.disabled = true;
            //  element.disabled = true;

            var myFunction = function(){
              element.style.backgroundColor   = "#007bff";
              element.style.cursor = "pointer";
              element.innerHTML  = "Verify Captcha";
              element.disabled = false;
              inputData.disabled = false;
              inputData.value ='sssss';
            };
            setTimeout(myFunction,2000);
          }
        }   
        setTimeout(myFunctions,2000); 
  };
  // const imageStyles = { minWidth: 100, minHeight: 100 };
   return (

    <div class="container">
          <div class="col-md-8">
            <h4 id="captcha" style={{ marginTop:"60px",marginLeft:"200px",position:"absolute"}}>{captcha}</h4>
          </div>
            <div class="form-group row">
              <img src={captchaImg} /> 
            </div>

            <div class="form-group row">
              <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
                name="username"  onChange={handleChange} autocomplete="off" style={{width:"100%"}}
                /><br></br>
              <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1">Verify Captcha</button>
            
            </div>

      
      </div>
    );
}

export default Captcha;