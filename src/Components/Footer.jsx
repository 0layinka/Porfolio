import React from 'react'

const Footer = () => {
  return (
    <>
    <nav className='grid grid-cols-12 h-20'>
      {/* nav content */}
      <div className='col-span-3 hidden col-start-1 md:flex justify-end  items-start list-none '>
        <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href=""><i class="ri-github-fill"></i></a></li>
        <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href=""><i class="ri-twitter-x-fill"></i></a></li>
        <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href=""><i class="ri-telegram-2-fill"></i></a></li>
        <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href=""><i class="ri-discord-fill"></i></a></li>
      </div>
      {/* first line */}
      <div className='col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-start'>
        <hr className='border-1 animate-pulse border-blue-500' />
        <div className='col-span-3 mx-auto my-6 md:hidden col-start-1 flex justify-end  items-start list-none '>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href="https://github.com/0layinka"><i class="ri-github-fill"></i></a></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href="https://x.com/ZeemOfWeb3?t=iqeyEPCViOC6rBryYiH-Pg&s=09"><i class="ri-twitter-x-fill"></i></a></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href="http://t.me/ZeemOfWeb3"><i class="ri-telegram-2-fill"></i></a></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><a href=""><i class="ri-discord-fill"></i></a></li>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Footer;
