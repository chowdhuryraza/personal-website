import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id="hero" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-sm text-gray-600'>
                    CS @ Columbia | Aspiring SWE
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#009EFF]'>Chowdhury</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Sophomore CS Student
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a sophomore studying Computer Science at Columbia Engineering.
                    I'm expanding my skills in data science, artificial intelligence,
                    and full-stack development to build impactful tools. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="https://www.linkedin.com/in/chowdhuryraza">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="https://github.com/chowdhuryraza">
                            <FaGithub />
                        </Link>    
                    </div>
                    <div className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="/#contact">
                            <AiOutlineMail/>
                        </Link>
                    </div>
                    <div className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href="/#about">
                            <BsFillPersonLinesFill/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero