import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/login')
    }
  return (
    <div className='flex flex-col justify-evenly'>
        <h1 className='font-bold text-center m-5 p-20'>Home Page </h1>
        <div className='flex flex-col gap-2'>
            <h4 className='font-medium text-center  p-2'> Go to login page..</h4>
        <button className="font-extrabold w-[120px] ml-145 text-white bg-blue-600 text-center"onClick={handleClick}>Click Here</button>
        </div>
    </div>
  )
}

export default Home