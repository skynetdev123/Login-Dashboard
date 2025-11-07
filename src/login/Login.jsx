import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Login = () => {

    const navigate=useNavigate();
    const[input,setInput]=useState({email:"john@mail.com",password:"changeme"})

    function handleEmailInput(e){
        setInput({...input,email:e.target.value})
    }

    function handlePasswordInput(e){
        setInput({...input,password:e.target.value})
    }   
    
    function postData(){
          axios.post("https://api.escuelajs.co/api/v1/auth/login",input)
           .then((res)=>{
            localStorage.setItem("token",JSON.stringify(res.data.access_token))
            console.log("res:",res.data.access_token)
            console.log("Login Successful")
             }).catch((err)=>{
                console.log("err:",err)
               alert("Login Failed")})
        }
      function handleSubmit(e){
        e.preventDefault();
        postData()
        navigate('/profile')
        }
       
     function handleHomeClick(){
        navigate('/')
     }
    
      


  return (
    <div className="flex flex-col justify-center items-center">
         <h1 className='text-center font-mono m-5'>Login Page </h1>
    <form className='py-10 px-5 m-10 border-2 border-gray-300 rounded-lg bg-white' onSubmit={handleSubmit}>
       <h3 className="text-blue-700 text-center font-bold">Welcome Back!!</h3>
        <div className='m-10 flex flex-1 border-2 border-gray-300 rounded-lg  p-5 gap-5 '>
            <p className='text-center p-2'>Username :</p>
            <input 
            
            value={input.email}
            onChange={handleEmailInput}
            type="text" 
            placeholder="Enter Username..." 
            className="w-1/2 h-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"></input>
        </div>
        <div className='m-10 flex flex-1 border-2 border-gray-300 rounded-lg p-5 gap-5 items-end'>
            <p className='text-center p-2'>Password :</p>
            <input
             value={input.password}
             onChange={handlePasswordInput}
             type="password"
             placeholder="Enter Password..." 
             className="w-1/2 h-full  p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"></input>
        </div>
       <div className='text-center'>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" type="submit">
         Login
        </button>
        </div>
        </form>
        <button className="bg-green-600 text-white rounded-md p-2 m-2 "onClick={handleHomeClick}>Go to home page</button>
        </div>
  )
}
