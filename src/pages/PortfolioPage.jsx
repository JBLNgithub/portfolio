import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'

const PortfolioPage = () => {
  const refs = [
    {label:'App', ref:'https://jblngithub.github.io/portfolio/', isGithub:'false'},
    {label:'github', ref:'https://github.com/JBLNgithub/portfolio', isGithub:'true'},
  ]

  return (
    <>
      <section>
        <ProjectHeader
          title='Portfolio'
          isInDev='true'
          refs={refs}
        >
          <p>
            Portfolio is a little webapp made to regroup and introduce pasts and futurs personal projects 
          </p>

          <UsedTechno>
            <SkillTile name='React' />
            <SkillTile name='Tailwind' />
          </UsedTechno>

        </ProjectHeader>
      </section>
    </>
  )
}

export default PortfolioPage