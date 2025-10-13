import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Comparator from '../components/Comparator'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'
import Mermaid from '../components/Mermaid'

import {stockemoiseDatabase, stockemoiseUseCase} from '../utils/diagsMermaid'


const StockemoisePage = () => {
  const refs = [
    {label:'frontend', ref:'https://jblngithub.github.io/stockemoise/', isGithub:'false'},
    {label:'current website', ref:'https://stockemoise.be/', isGithub:'false'},
    {label:'frontend', ref:'https://github.com/JBLNgithub/stockemoise', isGithub:'true'},
    {label:'backend', ref:'https://github.com/JBLNgithub/stockemoise-backend', isGithub:'true'},
    {label:'API docs', ref:'https://editor.swagger.io/?url=https://raw.githubusercontent.com/JBLNgithub/stockemoise-backend/refs/heads/main/src/datas/spec.json', isGithub:'false'},
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
            La Stockemoise is a Belgian amateur wind orchestra with which I've played for quite some times now. The current website of the orchestra is a WordPress, so Reimagining the website became a logical thing to do.
          </p>
          <p className='mt-4'>
            The goals of the new App were to define more clearly activities the orchestra is carrying out and a better follow-up of upcoming concerts while still allowing news to be published.
          </p>
          <p className='mt-4'>
            To reach these goals, tabs are set by activity. Each tab has a single role to fill. Also, a sidebar is designed to easily find informations on next concerts and news. Models were made before the start of implementation.
          </p>
          <p className='mt-4'>
            Frontend is a react App with tailwind for the style.
          </p>
          <p className='mt-4'>
            Backend is a REST API runing on an express.js server. API documentations is generated with swagger. If the link to swagger editor doesn't work properly, docs can be imported in the swagger editor with the link <span className='bg-neutral-300 px-2 py-0.5 rounded-2xl'>https://raw.githubusercontent.com/JBLNgithub/stockemoise-backend/refs/heads/main/src/datas/spec.json</span> docs is also available when running the backend at <span className='bg-neutral-300 px-2 py-0.5 rounded-2xl'>&#8249;host&#8250;&#8249;port&#8250;/api-docs</span>
          </p>

          <UsedTechno>
            <SkillTile name='React' />
            <SkillTile name='Tailwind' />
            <SkillTile name='Figma' />
            <SkillTile name='Mermaid' />
            <SkillTile name='Express' />
            <SkillTile name='SQLite3' />
            <SkillTile name='Swagger' />
          </UsedTechno>

        </ProjectHeader>
      </section>

      <section>
        <Comparator
          label2='Current Website'
          label1='Project'
          img2='homeOffStockem.png'
          img1='homeAppStockem.png'
        />

        <Comparator
          label2='Current Website'
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