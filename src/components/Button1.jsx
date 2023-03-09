import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Button1 = () => {
  return (
    <div className=' flex flex-row justify-between items-center m-2 '>
        <h1 className='font-bold m-1'>Unnamed</h1>
        <div className='flex flex-row gap-5 h-[32px] md:gap-12 xl:gap-20 '>
            <a  
            className="rounded-xl bg-blue-400 p-1 hover:bg-blue-600" href="/">Home</a>
            <a className='rounded-xl bg-blue-400 p-1 hover:bg-blue-600 '
               href="/">About</a>
            <a className='rounded-xl bg-blue-400 p-1 hover:bg-blue-600 '
               href="/">Contact</a>
        </div>
       <div className='m-1'>
       <ConnectButton  mounted={true}/>
       </div>
    </div>
  )
}

export default Button1