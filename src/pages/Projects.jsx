import React from 'react';

const Projects = () => {
  return (
    <div className="md:h-[80%] flex items-center justify-center">
      <div className="container my-4 md:my-0  w-[95%] bg-transparent mx-auto flex-col flex items-center">
        <div className="flex md:hidden w-full justify-between">
          <a className='m-6 text-xl text-blue-500' href="/"><i class="ri-arrow-left-line"></i>Home</a>
          <a className='m-6 text-xl text-blue-500' href="/experience">Experience<i class="ri-arrow-right-line"></i></a>
        </div>
        <div className="grid grid-cols-6 w-full md:h-[65vh] gap-4 ">
          <div className="md:col-span-2 col-span-6 h-full hover:animate-pulse border-2 rounded-2xl p-3 border-blue-500"><img src="./sendrn.JPG" className=' my-3' alt="" />
            <div className='px-4'>
                <p className='text-xl  text-blue-500 text-center uppercase'><a href="">ZShoe – A Modern Shoe Store</a></p>
                <p>ZShoe is a sleek and responsive e-commerce website for footwear enthusiasts. Built with HTML, CSS, and JavaScript, it offers a user-friendly interface, smooth navigation, and a stylish design. The site showcases a variety of shoes, allowing customers to explore collections effortlessly.
                    <br /><br />Tech Stack: HTML, CSS, JavaScript and Tailwind
                    <br />Live Demo: <a className='text-center text-blue-500 underline' href="https://zshoe.vercel.app/">Zshoe</a>
                </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-6 h-full hover:animate-pulse border-2 rounded-2xl p-3 border-blue-500"><img src="./homyz.JPG" className=' my-3' alt="" />
            <div className='px-4'>
                <p className='text-xl  text-blue-500 text-center uppercase'><a href="">HOMYZ – Real Estate Website</a></p>
                <p>HOMYZ is a modern and responsive real estate Front-End website designed to showcase properties effectively. It features a clean layout, intuitive navigation, and a visually appealing design to enhance user experience. <br />
                    <br />Tech Stack: React and Tailwind
                    <br />Live Demo: <a className='text-center text-blue-500 underline' href="https://estate-project-68d.pages.dev/">HOMYZ</a>
                </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-6 h-full hover:animate-pulse border-2 rounded-2xl p-3 border-blue-500"><img src="./computeraluminium.JPG" className=' my-3' alt="" />
            <div className='px-4'>
                <p className='text-xl  text-blue-500 text-center uppercase'><a href="">Computer Aluminium</a></p>
                    Computer Aluminium is a modern and responsive website designed to showcase aluminium products with a clean and professional layout. It provides smooth navigation and an intuitive user experience, making it easy for visitors to explore available products. <br />
                    <br />Tech Stack: React and Tailwind
                    <br />Live Demo: <a className='text-center text-blue-500 underline' href="https://computer-aluminium.pages.dev/">Computer Aluminium</a>
                <p/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
