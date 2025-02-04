import React from 'react'

const Experience = () => {
  return (
    <div className='h-[80%] flex flex-col justify-center'>
      <div className="container md:my-0 my-4 w-[95%] pt-[10px] bg-transparent mx-auto">
        <div className="flex md:hidden w-[100%] justify-between">
          <a className='m-6 text-xl text-blue-500' href="/projects"><i class="ri-arrow-left-line"></i>Project</a>
          <a className='m-6 text-xl text-blue-500' href="/contact">Contact<i class="ri-arrow-right-line"></i></a>
        </div>
        <div className="grid grid-cols-6 mt-2 gap-6">
            <div className="md:col-span-2 col-span-6 border-2 border-blue-500 rounded-2xl p-6">
                <h1 className="text-3xl text-blue-500 text-center uppercase my-3">Experience</h1>
                <p className='text-xl font-light text-center'><p className="font-bold font-sans my-2">Frontend Developer | 1.5+ Years Experience</p>
                I build modern, responsive, and interactive web applications using cutting-edge frontend technologies. My focus is on creating sleek user interfaces with clean code and optimized performance.
                </p>
            </div>
            <div className="md:col-span-2 col-span-6 border-2 border-blue-500 rounded-2xl p-6">
                <h1 className="text-3xl text-blue-500 text-center uppercase my-3">Skills & Technologies</h1>
                <p className='text-xl font-light'><p className="font-bold font-sans text-left my-2">Languages & Frameworks</p>
                    <li className='ms-3'>JavaScript (ES6+), React, HTML, CSS, Tailwind.</li>
                </p>
                <p className='text-xl font-light'><p className="font-bold font-sans text-left my-2">Tools & Libraries</p>
                    <li className='ms-3'> Git/GitHub, Figma(UI design), Firebase, REST APIs</li>
                </p>
                <p className='text-xl font-light'><p className="font-bold font-sans text-left my-2">Performance & Optimization</p>
                    <li className='ms-3'>Responsive Design, SEO, Web Accessibility</li>
                </p>
            </div>
            <div className="md:col-span-2 col-span-6 border-2 border-blue-500 rounded-2xl p-6">
                <h1 className="text-3xl text-blue-500 text-center uppercase my-3">Internship</h1>
                <p className='text-xl font-light'><p className="font-bold font-sans text-center my-2">📌 Aptech | Frontend Development Intern (6 Months)</p>
                    <li className='ms-3'>Developed responsive web pages using HTML, CSS, and JavaScript.</li><br />
                    <li className='ms-3'>Gained hands-on experience with frontend frameworks and UI design principles..</li>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
