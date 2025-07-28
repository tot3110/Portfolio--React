import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { RiReactjsLine } from "react-icons/ri"

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div 
        className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaHtml5 className='text-5xl text-orange-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaCss3Alt className='text-5xl text-blue-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <BsBootstrap className='text-5xl text-purple-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaJsSquare className='text-5xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaGithub className='text-5xl text-white' />
            </div>
        </div>
    </div>
  )
}

export default Technologies
