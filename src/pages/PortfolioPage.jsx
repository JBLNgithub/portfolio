import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'

const PortfolioPage = () => {
  return (
    <>
      <section>
        <ProjectHeader
          title='Portfolio'
          isInDev='true'
          refApp='https://jblngithub.github.io/port-folio/'
          refGithub='https://github.com/JBLNgithub/portfolio'
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