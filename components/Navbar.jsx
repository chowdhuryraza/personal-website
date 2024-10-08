import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [linkColor, setLinkColor] = useState("#1f2937")

    const router = useRouter()

    useEffect(()=>{
        if(router.asPath === '/hul'){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }
        else{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }

    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)

    }, [])
  return (
    <div style={{backgroundColor: `${navBg}`}}className={shadow ? 'w-full fixed h-20 shadow-xl z-[100]' : 'w-full fixed h-20 z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/">
                <h1 className={navBg!='transparent' ? 'text-[#012169]' : 'text-white'}>Cr.</h1>
            </Link>
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':
                'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href="/">
                            <h2 className='text-[#012169]'>Cr.</h2>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>CS @ Columbia | Aspiring SWE</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li className='py-4 text-sm' onClick={()=>setNav(false)}>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='py-4 text-sm' onClick={()=>setNav(false)}>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='py-4 text-sm' onClick={()=>setNav(false)}>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='py-4 text-sm' onClick={()=>setNav(false)}>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='py-4 text-sm' onClick={()=>setNav(false)}>Contact</li>
                        </Link>
                    </ul>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#009EFF]'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='shadow-lg rounded-full shadow-gray400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="https://www.linkedin.com/in/chowdhuryraza">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <div className='shadow-lg rounded-full shadow-gray400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="https://github.com/chowdhuryraza">
                                    <FaGithub />
                                </Link>    
                            </div>
                            <div className='shadow-lg rounded-full shadow-gray400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="/#contact">
                                    <AiOutlineMail/>
                                </Link>
                            </div>
                            <div className='shadow-lg rounded-full shadow-gray400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href="/#about">
                                    <BsFillPersonLinesFill/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar