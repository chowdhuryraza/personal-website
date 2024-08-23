import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id="contact" className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#009EFF]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img 
                                className='rounded-xl hover:scale-105 ease-in duration-300'
                                src='https://images.unsplash.com/photo-1527685216219-c7bee79b0089?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMHR5cGluZyUyMG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D'
                                alt='Typing On Laptop Keyboard'
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>Chowdhury Raza</h2>
                            <p className='py-4'>
                                I am looking for internship and project-collaboration opportunities.
                                Feel free to email or connect with me.
                            </p>
                            <p><strong>Email:</strong> chr2131@columbia.edu</p>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                            </div>
                            <div className='flex items-center justify-between py-4'>
                                <Link className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/chowdhuryraza">
                                    <FaLinkedinIn />
                                </Link>
                                <Link className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="https://github.com/chowdhuryraza">
                                    <FaGithub />
                                </Link>
                                <Link className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="/#contact">
                                    <AiOutlineMail/>
                                </Link>
                                <Link className='shadow-lg rounded-full shadow-gray400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="/#about">
                                    <BsFillPersonLinesFill/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='shadow-lg rounded-full shadow-gray400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#009EFF]'size={30}/>
                    </div>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Contact