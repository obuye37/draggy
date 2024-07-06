import { Card, Chip } from '@nextui-org/react'
import React from 'react'

const Socials = () => {
  return (
    <div id='socials' className='bg-gray-950 p-20 flex justify-center items-center flex-col w-full'>
      <div className='text-4xl text-white pb-5'>Connect with Us</div>
      <div className='flex gap-2'>
        <Chip className='bg-blue-600  hover:text-slate-50 hover:bg-slate-950 text-white rounded-md'>Telegram</Chip>
        <Chip className='bg-blue-400  hover:text-slate-50 hover:bg-slate-950 text-white rounded-md'>Twitter</Chip>
      </div>
      
    </div>
  )
}
export default Socials
