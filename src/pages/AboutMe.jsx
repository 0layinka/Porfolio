import React from 'react'


const AboutMe = () => {
  return (
    <div className='h-[80%] '>
        <div className="flex md:hidden justify-end">
        <a className='m-6 text-xl text-blue-500' href="/projects">Projects<i class="ri-arrow-right-line"></i></a>
        </div>
      <div className="container  w-[95%] md:pt-[50px] bg-transparent mx-auto">
        <div className="grid grid-cols-6 gap-2">
            <div className="md:col-span-3 col-span-6">
              <div class=" w-2/3 md:ms-[10%] rounded-full mx-auto overflow-hidden border-4 border-blue-500">
                <img src="/image.png" alt="Profile Picture" class="mx-auto w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-3 my-6 col-span-6 md:pe-3 md:my-auto p-4">
              <div className="md:text-5xl text-4xl text-blue-500 animate-bounce text-center md:text-left">Hello, I'm Quazeem</div><br />
              <p className="text-xl text-center md:text-left font-light">I'm a passionate front-end developer with expertise in crafting responsive and user-friendly web applications. My skill set includes HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. I specialize in building intuitive interfaces that enhance user experience while ensuring performance and accessibility.
                I have hands-on experience developing and deploying web applications, with a strong focus on clean code, modern design, and seamless functionality. I'm always eager to learn new technologies and refine my skills to stay ahead in the fast-evolving web development space.
                Let’s build something amazing together!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
