import React from 'react'

const Contactform = () => {
  return (
    <form className='flex gap-2.5 my-1  flex-col'>
        <input type="text" placeholder="Name" required className='rounded-sm py-1 px-2 text-black outline-none' />
        <input type="email" placeholder="Email" required  className='rounded-sm py-1 px-2 text-black outline-none' />
        <textarea className='rounded-sm p-2 outline-none text-black' required placeholder="Message"></textarea>
        <button type="submit" className='border-[1px] border-purple-500 rounded-[8px] p-2 bg-white text-black '>Send</button>
    </form>
  )
}

export default Contactform