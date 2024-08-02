import React from 'react'
// images
import SignUp from '../images/signup.png';
import Logo from '../images/Logo.png';

// React
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import { useRef } from 'react';

// UUID
import { v4 as uuidv4 } from 'uuid';


const SignUpPage = () => {

const navigate = useNavigate();

const firstNameRef = useRef();
const lastNameRef = useRef();
const userNameRef = useRef();
const passwordRef = useRef();

const signUpHandler = async(event) => {
event.preventDefault();

// Get input values
const firstName = firstNameRef.current.value.trim();
const lastName = lastNameRef.current.value.trim();
const userName = userNameRef.current.value.trim();
const password = passwordRef.current.value.trim();


// Check empty values
if(!firstName || !lastName || !userName || !password) {
    alert("Please fill all required fields")
    return;
}

// Check strong password

if(password.length < 8) {
    alert("Weak password")
    return;
}

// Create a new user
const newUser = {
    firstName,
    lastName,
    userName,
    password,
    id: uuidv4(),
}

// Check existing User
const existingUserResponse = await fetch(`http://localhost:3000/users?userName=${userName}`)

const existingUserData = await existingUserResponse.json()

if(existingUserData.length > 0) {
    alert("Username already exists")
    return;
}


await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
})

   localStorage.setItem("userId", JSON.stringify(newUser.id))
   navigate("/");
}    



  return (
    <div className="flex flex-col items-center justify-center">

<div className="flex flex-row gap-[40px]">
{/* <!-- Right side --> */}
<div className="flex flex-col ml-[120px] mr-[40px]">

{/* <!-- header --> */}
<div className="flex flex-row gap-[80px]">
<div className="mt-[39px]"><img src={Logo} alt=""/></div>

<div className="mt-[59px]">
    <button className=" py-[9px] px-4 bg-[#1D1D1D] rounded-[6px] 
flex flex-row gap-[4px]  justify-between items-baseline">
<i className="fa-solid fa-earth-americas text-white"></i>
<p className=" text-[16px] font-medium text-[#FFFFFF] ">English</p>
</button>
</div>

</div>
{/* <!-- sign in --> */}
<h1 className="text-[96px] font-extrabold mt-[40px]">Sign up <span className="text-[#FFC700]">.</span></h1>


{/* <!-- form 1 --> */}
<form onSubmit={signUpHandler} className="flex flex-row mt-[162px] gap-10">
<div className="flex flex-col">
<label htmlFor="text" className="text-[16px] font-extrabold uppercase mb-4">Firstname</label>
<input 
ref={firstNameRef}
type="text" id="text" className="border border-x-1 border-[#000000] 
w-[293px] h-[48px] font-bold rounded-[8px] px-2"/>
</div>

<div className="flex flex-col">
<label htmlFor="text" className="text-[16px] font-extrabold uppercase mb-4">Lastname</label>
<input 
ref={lastNameRef}
type="text" className="border border-x-1 border-[#000000] 
w-[293px] h-[48px] font-bold rounded-[8px] px-2 "/>
</div>


</form>

{/* <!-- form 2 --> */}
<form onSubmit={signUpHandler} className="flex flex-col mt-10">

<label htmlFor="email" className="text-[16px] font-extrabold uppercase mb-4">Username</label>
<input 
ref={userNameRef}
type="text"  className="border border-x-1 border-[#000000] 
w-[626px] h-[48px] font-bold rounded-[8px] px-2"/>


<label htmlFor="password" className="text-[16px] font-extrabold uppercase mt-[40px] mb-4">Password</label>
<input 
ref={passwordRef}
type="password" id="password" className="border border-x-1 border-[#000000] 
w-[626px] h-[48px] font-bold rounded-[8px] px-2"/>

{/* <!-- remember --> */}
<div className="flex flex-row my-10">
<input type="radio" id="remember" className="mr-[10px]"/>
<label htmlFor="remember" className="text-[16px] font-medium">Yes, I understand & agree to the 
    <a href="" className="underline">Terms & Conditions.</a></label>
</div>

{/* <!-- sign in --> */}
<div className="relative flex items-center justify-between bg-[#1D1D1D] rounded-[8px] mb-10">
<button onClick={signUpHandler} className="py-[11px] pl-[16px] rounded-lg text-white  outline-none text-[16px] font-extrabold uppercase">Sign up</button>
<a href="" className="absolute right-4 w-6 h-6"><i className="fa-solid fa-arrow-right text-white"></i></a>
</div>

<p className="text-[16px] font-medium">Have an account? <Link to="/sign-in" className="underline">Sign in here.</Link></p>


</form>



</div>


<div className="w-[985px] ml-auto ">
    <img src={SignUp} alt=""/>
</div>

</div>
</div>
  )
}

export default SignUpPage