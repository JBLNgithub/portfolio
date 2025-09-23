import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Comparator from '../components/Comparator'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'

const StockemoisePage = () => {
  return (
    <>
      <section>
        <ProjectHeader 
          title='La Stockemoise' 
          isInDev='true' 
          refApp='https://jblngithub.github.io/stockemoise/'
          refGithub='https://github.com/JBLNgithub/stockemoise'
          labelOrg='Official Website'
          refOrg='https://stockemoise.be/'
        >
          <p>
            La Stockemoise is a Belgian amateur wind orchestra with which I've played for quite some times now. The current website of the orchestra is a WordPress, so Reimagining the website became a logical thing to do.
          </p>
          <p className='mt-4'>
            The goals of the new App were to define more clearly activities the orchestra is carrying out and a better follow-up of upcoming concerts while still allowing news to be published.
          </p>
          <p className='mt-4'>
            To reach these goals, tabs are set by activity. Each tab has a single role to fill. Also, a sidebar is designed to easily find informations on next concerts and news. Models were made before the start of implementation.
          </p>
          <p className='mt-4'>
            There is currently no back-end. Datas are being saved in a json file. I plan to develop a REST API later on.
          </p>

          <UsedTechno>
            <SkillTile name='React' />
            <SkillTile name='Tailwind' />
            <SkillTile name='Figma' />
            <SkillTile name='Mermaid' />
          </UsedTechno>

        </ProjectHeader>
      </section>

      <section>
        <Comparator
          label2='Official Website'
          label1='Project'
          img2='homeOffStockem.png'
          img1='homeAppStockem.png'
        />

        <Comparator
          label2='Official Website'
          label1='Project'
          img2='actuOffStockem.png'
          img1='actuAppStockem.png'
        />

        <Comparator
          label2='Model'
          label1='Project'
          img2='homeModelStockem.png'
          img1='homeAppStockem.png'
        />
        
        <Comparator
          label2='Model'
          label1='Project'
          img2='actuModelStockem.png'
          img1='actuAppStockem.png'
        />

        <Comparator 
        label1='EA Diag'
        label2='Traduction'
        img1='EADiagStockemoise.png'
        img2='ERDiagStockemoise.png'
        />

      </section>
    </>
  )
}

export default StockemoisePage