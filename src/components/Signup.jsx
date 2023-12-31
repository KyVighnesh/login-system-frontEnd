import React from "react";
import {useState} from "react"
import axios from "axios"




const Create = () => {



  const [signUp,setSignUp] = useState({
    username:"",password:"",file:[]
  })

  const onHandleChange =  (event) => {
    setSignUp({...signUp,[event.target.name]:event.target.value})
  }

  const onHandleClick = () => {

    axios.post("https://login-system-with-mongo-ky-vighneshvigh.julyseptoct-node.repl.co/signup",signUp).then(res=> {
      console.log(res)
    }).catch(err=> {
      console.log(err)
    })
  }


  console.log(localStorage.getItem("token"))






  return (
    <div style={{width:"500px",margin:"auto"}}>
    
    <h2>File Storage</h2>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input onChange = {onHandleChange}type="text" class="form-control" placeholder="New Username" aria-label="Username" aria-describedby="addon-wrapping" name = "username" value = {signUp.username} />
</div>

         <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input onChange = {onHandleChange}type="password" class="form-control" placeholder="New Password" aria-label="Username" aria-describedby="addon-wrapping" name = "password" value = {signUp.password} />
</div>



      <button style = {{marginTop:"20px"}}type="button" class="btn btn-success" onClick = {onHandleClick}>Sign up</button>




    </div>
  )
}

export default Create;