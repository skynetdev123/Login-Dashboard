import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()
  const [userData,setUserData]=useState(null)

  function getProfileData(){
    const token = JSON.parse(localStorage.getItem("token"))
    const config={
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    axios.get('https://api.escuelajs.co/api/v1/auth/profile',config)
    .then((res)=>{
      setUserData(res.data)
      console.log("Profile Data:",res.data)
    }).catch((err)=>{
      alert("Unauthorized Acesses : Please Login first!!")
      console.log("err:",err)
    })

  }
   
  function handleLogout(){
    setUserData(null)
    localStorage.removeItem("token")
    alert("Logged Out Successfully")
    navigate('/login')
  }



  return (
    <div>
      <h1 className='text-center font-mono'>Profile Page </h1>
      <button className="bg-blue-600 text-white p-2 m-5 rounded-md"onClick={getProfileData}> Get Profile Data</button>
     <div className='w-full h-full'>
       {userData && (
        <div className='border-2 border-gray-300 rounded-lg m-10 p-5 bg-green-50'>
          <img className='rounded-full h-30 w-30 mb-5' src={userData.avatar} alt="user-img" />
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role}</p>
        </div>
      )}
     </div>
      <button className='bg-red-600 text-white p-2 m-7 rounded-md' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Profile
