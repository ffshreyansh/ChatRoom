"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import Nav from "@components/Nav";



const Signin = () => {

    const {data: session} =  useSession();
    const [providers, setProviders] = useState(null);
    const router = useRouter();

    useEffect(()=>{
      const setUpProviders = async () =>{
        const response = await getProviders();
        setProviders(response);
      } 
      setUpProviders()
    }, [])  

    useEffect(()=>{
      if(session){
        router.push("/");
      }
    }, [session]);

  return (
   
    <div className='getStarted w-1/3 text-center   p-8 rounded-xl shadow-xl'>
        <h1 className='font-bold mb-2 text-center text-3xl'>Get Started</h1>
        <p className='text-lg'>Dive into a safer and convenient platform to connect with your personal and professional life</p>
     
     {
      providers && Object.values(providers).map((provider)=>(
      <button type="button" className='w-full mt-6 rounded-xl text-white font-semibold bg-google-blue py-4 '
      key={provider.name} onClick={() => signIn(provider.id)}
      > <i class="fa-brands fa-google-plus-g"></i> Login with Google </button>
     
      ))}
      <button className='w-full mt-6 rounded-xl text-white font-semibold bg-black py-4 '><i class="fa-brands fa-github"></i> Login with Github</button>
      <div className='mt-12 mb-12 bg-black w-full h-1'></div>
      <input type="text" name="mobile" id="mobile" placeholder='+91 XXXX XXXX' className='w-full rounded-xl bg-gray-200 py-4 px-4' />
      <button className='w-full mt-6 rounded-xl text-white font-semibold bg-black py-4 '>Login with OTP</button>
    </div>
    
  )
}

export default Signin