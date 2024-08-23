import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#009EFF]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    Growing up in Bangladesh, I didn't have much access to
                    computers. So, each time I encountered one, my fascination 
                    grew exponentially. My cultivated and increasing interest
                    would realize itself in many forms when I immigrated to America. From
                    performing my duties as the 7th-grade class technology
                    manager to learning Python through my high school's summer
                    program, I have maintained a strong connection with computers and 
                    a desire to learn more about them.
                </p>
                <p className='py-2 text-gray-600'>
                    I have developed many other interests: sports/fitness, transportation,
                    economics, and community engagement. As I accumulated more knowledge
                    of programming and technologies, I recognized the ability to pursue 
                    my interests through CS. Whether coding my first health web app or performing
                    data extraction on permits as a research assistant, I continue to uncover the endless
                    possibilities of computers and technologies.
                </p>
                <Link href="/#projects">
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my latest projects!</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1644308414850-893551d6d4c3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Picture Of MacBook Opening In The Dark"/>
            </div>
        </div>
    </div>
  )
}

export default About