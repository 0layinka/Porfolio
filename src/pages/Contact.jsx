import React from 'react'

const Contact = () => {
  return (
    <div className='h-[80%] '>
      <div className="container w-[95%] md:pt-[50px] bg-transparent mx-auto">
        <div className="flex md:hidden w-[100%] justify-center">
          <a className='m-6 text-xl text-blue-500' href="/"><i class="ri-arrow-up-line"></i>Home</a>
        </div>
        <div className="grid grid-cols-6 mt-2 gap-2">
            <div className="md:col-span-3 col-span-6 ">
              <div class=" w-2/3 mx-auto md:ms-[10%] rounded-full overflow-hidden border-4 border-blue-500">
                <img src="/image.png" alt="Profile Picture" class="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-3 md:text-left text-center col-span-6 p-5 md:pe-3 my-auto">
              <div className="text-2xl text-blue-500 animate-bounce">Contact Me Here 👇</div><br />
                <p className='text-xl'><b className='text-blue-500'>Email:</b> quazeemfreelance@gmail.com</p><br />
                <p className='text-xl'><b className='text-blue-500'>Phone:</b> 09027220288</p><br />
                <p className='text-xl'><b className='text-blue-500'>Twitter(X):</b> @zeemofweb3</p><br />
              <div className="text-3xl text-blue-500 my-3 ">THANK YOU</div><br />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
