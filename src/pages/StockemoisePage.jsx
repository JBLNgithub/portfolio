import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Comparator from '../components/Comparator'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'
import Mermaid from '../components/Mermaid'
import BasicLink from '../components/BasicLink'

import {stockemoiseDatabase, stockemoiseUseCase} from '../utils/diagsMermaid'


const StockemoisePage = () => {
  const refs = [
    {label:'Webapp', ref:'http://stockemoise.jbln.be', isGithub:'false'},
    {label:'Current website', ref:'https://stockemoise.be/', isGithub:'false'},
    {label:'Frontend', ref:'https://github.com/JBLNgithub/stockemoise', isGithub:'true'},
    {label:'Backend', ref:'https://github.com/JBLNgithub/stockemoise-backend', isGithub:'true'},
  ]

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
          refs={refs}
        >
          <p>
            La Stockemoise is a Belgian amateur wind orchestra which I've played whitin for quite some times now. The current website of the orchestra is a WordPress, so Reimagining the website became a logical thing to do.
          </p>
          <p className='mt-4'>
            The goals of the new App were to define more clearly activities the orchestra is carrying out and a better follow-up of upcoming concerts while still allowing news to be published.
          </p>
          <p className='mt-4'>
            To reach these goals, tabs are set by activity. Each tab has a single role to fill. Also, a sidebar is designed to easily find informations on next concerts and news.
          </p>

          <UsedTechno>
            <SkillTile name='React' />
            <SkillTile name='Tailwind' />
            <SkillTile name='Node.js' />
            <SkillTile name='SQLite3' />
            <SkillTile name='Figma' />
            <SkillTile name='Mermaid' />
            <SkillTile name='Express' />
          </UsedTechno>

        </ProjectHeader>
      </section>

      <section>
        <Comparator
          label2='Old site'
          label1='New site'
          img2='homeOffStockem.png'
          img1='homeAppStockem.png'
        />

        <Comparator
          label2='Old site'
          label1='New site'
          img2='actuOffStockem.png'
          img1='actuAppStockem.png'
        />

        <Comparator
          label2='Model'
          label1='New site'
          img2='homeModelStockem.png'
          img1='homeAppStockem.png'
        />
        
        <Comparator
          label2='Model'
          label1='New'
          img2='actuModelStockem.png'
          img1='actuAppStockem.png'
        />

        <Comparator 
        label1='EA Diag'
        label2='Translation'
        img1='EADiagStockemoise.png'
        img2='ERDiagStockemoise.png'
        />
      </section>

      <section>
        <Mermaid title='Use Case' code={stockemoiseUseCase} />
        <Mermaid title='EA Diag' code={stockemoiseDatabase} />
      </section>
    </>
  )
}

export default StockemoisePage