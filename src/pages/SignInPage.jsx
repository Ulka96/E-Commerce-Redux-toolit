import React from 'react'

// Images

import Jacket from "../images/Jacket.png"
import Logo from "../images/Logo.png"

// React
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import { useRef } from 'react';

const SignInPage = () => {

const userNameRef = useRef();
const passwordRef = useRef();  

const navigate = useNavigate();

const signInHandler = async(event) => {
event.preventDefault();

// Get input values
const userName = userNameRef.current.value.trim();
const password = passwordRef.current.value.trim();


if(!userName || !password) {
    alert("Please fill all required fields")
    return;
}

const response = await fetch(`http://localhost:3000/users?userName=${userName}`)
const data = await response.json();

// Check existing user
if(!data.length) {
    alert("Username or password is incorrect")
    return;
}

const user = data[0];

// Check correct password
if(user.password !== password) {
    alert("Username or password is incorrect")
    return;
}

localStorage.setItem("userId", JSON.stringify(user.id))
navigate("/")
}

  return (
    <div className="flex flex-col items-center justify-center">

<div className="flex flex-row gap-[40px]">
{/* <!-- Right side --> */}
<div className="flex flex-col ml-[120px] mr-[40px] ">

{/* <!-- header --> */}
<div className="flex flex-row gap-[80px]">
<div className="mt-[39px]"><img src={Logo}/></div>

<div className="mt-[59px]">
    <button className=" py-[9px] px-4 bg-[#1D1D1D] rounded-[6px] 
flex flex-row gap-[4px]  justify-between items-baseline">
<i className="fa-solid fa-earth-americas text-white"></i>
<p className=" text-[16px] font-medium text-[#FFFFFF] ">English</p>
</button>
</div>

</div>
{/* <!-- sign in --> */}
<h1 className="text-[96px] font-extrabold mt-[40px]">Sign in <span className="text-[#FFC700]">.</span></h1>

{/* <!-- form --> */}
<form onSubmit={signInHandler} className="mt-[166px] flex flex-col">
<label for="email" className="text-[16px] font-extrabold uppercase mb-4">Username</label>
<input 
ref={userNameRef}
type="text" id="email" className="border border-x-1 border-[#000000] 
w-[626px] h-[48px]  rounded-[8px] font-bold"/>


<label for="password" className="text-[16px] font-extrabold uppercase mt-[40px] mb-4">Password</label>
<input 
ref={passwordRef}
type="password" id="password" className="border border-x-1 border-[#000000] 
w-[626px] h-[48px]  rounded-[8px] text-black"/>

{/* <!-- remember --> */}
<div className="flex flex-row my-10">
<input type="radio" id="remember" className="mr-[10px]"/>
<label for="remember" className="text-[16px] font-medium">Remember me</label>
<a href="" className="underline text-[16px] font-medium ml-[336px]">Recover my password</a>
</div>

{/* <!-- sign in --> */}
<div className="relative flex items-center justify-between bg-[#1D1D1D] rounded-[8px] mb-10">
<button className="py-[11px] pl-[16px] rounded-lg text-white  outline-none text-[16px] font-extrabold uppercase">Sign in</button>
<a href="" className="absolute right-4 w-6 h-6"><i className="fa-solid fa-arrow-right text-white"></i></a>
</div>

<p className="text-[16px] font-medium">New here? <Link to="/sign-up" className="underline">Create an account.</Link></p>


</form>



</div>


<div className="w-[985px] ml-auto ">
    <img src={Jacket}/>
</div>
</div>
</div>

  )
}

export default SignInPage