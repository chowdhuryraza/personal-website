import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-[#009EFF]'>Skills</p>
            <h2>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/html.png' 
                                width="64" 
                                height="64"
                                alt="HTML PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/css.png' 
                                width="64" 
                                height="64"
                                alt="CSS PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/javascript.png' 
                                width="64" 
                                height="64"
                                alt="JavaScript PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/react.png' 
                                width="64" 
                                height="64"
                                alt="React PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/python.png' 
                                width="64" 
                                height="64"
                                alt="Python PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/django.png' 
                                width="64" 
                                height="64"
                                alt="Django PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Django</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/postgresql.png' 
                                width="64" 
                                height="64"
                                alt="PostgreSQL PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/cpp.png' 
                                width="64" 
                                height="64"
                                alt="C++ PNG Logo"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>C++</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills