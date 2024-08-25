import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hulImg from '../public/assets/projects/hul.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const hul = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className="absolute z-1" layout='fill' objectFit='cover' src={hulImg} alt="Landing Page Of HUL Project"/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>HealthUpLift</h2>
                <h3>JS / Firebase</h3>
            </div>
        </div>
        <div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This web application was built for the capstone project of All Star
                        Code's Summer Intensive Program. The application's goal and design
                        was centered around simplifying fitness. Firebase was used to authenticate 
                        users and store information about their health and goals. Based on
                        provided measurements and fitness goals, simple meal plans and exercise 
                        routines were provided to users daily.
                    </p>
                    <Link href="https://github.com/razac9/DemoDayProject/tree/main">
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML/CSS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Firebase</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Zen Quotes API</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Spoonacular API</p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default hul