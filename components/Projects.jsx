import React from 'react'
import Image from 'next/image'
import hulImg from '../public/assets/projects/hul.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#009EFF]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem 
                title="HealthUpLift" 
                projectImg={hulImg} 
                projectUrl="/hul"
                projectSkills="HTML/CSS & JS"
              />

            </div>
        </div>

    </div>
  )
}

export default Projects