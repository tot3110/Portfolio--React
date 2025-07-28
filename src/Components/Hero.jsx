import React from 'react'
import bgmain from '../assets/bgmain.webp';


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-5 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-thin tracking-tight'>
                        Abdul Basit</h1>
                   <span 
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent'>Frontend Web Developer</span>
                    <p
                    className='my-2 max-w-xl py-4 tracking-tighter'>I am a dedicated and 
                    versatile MERN stack developer with a passion for creating 
                    efficient and user-friendly web applications. I have worked with a variety of 
                    technologies, including HTML, CSS, Bootstrap, JavaScript, React.js, and Tailwind CSS. 
                    My journey in web development began with a deep curiosity about how things work,
                    and it has evolved into a career where I continuously strive to learn and adapt to new 
                    challenges. I thrive in collaborative environments and enjoy solving complex problems 
                    to deliver high-quality solutions.Outside of coding, I enjoy staying active, exploring 
                    new technologies, and contributing to open-source projects.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:py-8 '>
            <div className='flex justify-end'>
                <img
                    src={bgmain} alt="Abdul Basit" className='w-[400px] h-[400px]'/>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Hero

