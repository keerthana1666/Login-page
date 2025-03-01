import React from 'react';
import "./Login.css"
import {replace} from 'react-router-dom';
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"

// const Login=()=>{
function Login() {
   var userdata=[
    {username: "kee",passcode:123,cart:[]},
    {username: "karsh",passcode:456,cart:[]},
    {username: "muruga",passcode:789,cart:[]},
   ];
  const signup =()=>{
   var username = document.getElementById("username").value;
  var passcode = document.getElementById("passcode").value;
  var activeuserdetail=userdata.filter((data)=>{
    return username==data.username;
  });
  console.log(activeuserdetail);
  if(activeuserdetail.length>0){
    if(activeuserdetail[0].passcode == passcode){
    localStorage.setItem("username",activeuserdetail[0].username);
    window.location.replace("/Home");
  }else{
    console.log("Wrong Password");
  }
}
};

    return (
      <div class="main">
          <h1>Men'<small>s</small> Spark</h1>
          <div class="child">
       
              <h2>Login</h2>
              <h5><big>Name:</big></h5>
              <input type="text" placeholder="Enter Name" id='username'  />
              <h4>Password:</h4>
              
              <input type="text" placeholder='password' id='passcode'/>
              <br/>
              <a href='#'>Forget Password?</a>
              <br/>
              <button id="one" onClick={signup}>Login</button>
              <p>Aleady have an account?<a href='#'>signup</a></p>
          
          </div>
          
      </div>
    );
  }
export default Login;

