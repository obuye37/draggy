import { Divider } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='disclaimer italic font-thin text-sm text-yellow-400 p-10 max-md:text-center' >
            $Draggy coin has no association with Matt Furie or his creation “The Night Riders”. This token is simply paying homage to a beloved meme we all love.</div>
        <Divider />
        <div  className='text-slate-300 font-light text-sm py-20 bg-black w-full text-center'> 
            Copyright <span className='text-yellow-800'>&copy;</span> 2024 Draggy</div>
    </div>
  )
}

export default Footer
