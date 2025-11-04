import React from 'react'
import profilePic from '../assets/images/profilePic.jpg'
import SkillTile from '../components/SkillTile'

const HomePage = () => {
  return (
    <>
      <section className='text-center mt-20'>
        <h1 className='text-6xl md:text-8xl font-bold mb-40'>Junior Full-Stack Dev</h1>

        <div className='grid grid-cols-3'>
          <div className='col-span-3 md:col-span-1 row-span-2 mb-20 md:mb-6'>
            <div className=''>
              <img src={profilePic} alt='profile pic' className='size-50 object-cover rounded-full border-neutral-800 border-2 inline-block' />
            </div>
            <h3 className='text-4xl mt-3'>José Balon</h3>
          </div>
          <h2 className='text-5xl col-span-3 md:col-span-2 mb-5'>About me</h2>
          <p className='col-span-3 md:col-span-2'>
            Hi, I'm José.<br className='mb-4' />
            I'm a junior dev who likes to develop IT projects. I have a methodical way of thinking and so problem-solving and continuous learning has been a thing for me. I also enjoy staying up to date with new technologies. I'm always open to discuss with people, brainstorming and contributing to a collaborative environment. This allow me to learn from others, share knowledge and finally build better solutions. <br className='mb-4' />
            Outside of IT, my lobbies are essentially about music. I play saxophone and organ. I also play in an orchestra where I teach a bit.
          </p>
        </div>
      </section>
        <p></p>

      <section className='mt-30'>
        <h2 className='text-5xl'>Skills</h2>

        <h3 className='text-2xl mt-10'>Programming Languages</h3>
        <div className='grid grid-cols-4 mt-4 gap-3'>
          <SkillTile name='Python' />
          <SkillTile name='Java' />
          <SkillTile name='C' />
          <SkillTile name='C#' />
          <SkillTile name='Javascript' />
        </div>

        <h3 className='text-2xl mt-10'>Front-end</h3>
        <div className='grid grid-cols-4 mt-4 gap-3'>
          <SkillTile name='HTML' />
          <SkillTile name='CSS' />
          <SkillTile name='React' />
          <SkillTile name='Tailwind' />
        </div>

        <h3 className='text-2xl mt-10'>Back-end</h3>
        <div className='grid grid-cols-4 mt-4 gap-3'>
          <SkillTile name='Node.js' />
          <SkillTile name='SQL' />
        </div>

      </section>
    </>
  )
}

export default HomePage