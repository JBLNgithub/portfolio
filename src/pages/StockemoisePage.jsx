import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Comparator from '../components/Comparator'
import UsedTechno from '../components/UsedTechno'
import SkillTile from '../components/SkillTile'
import Mermaid from '../components/Mermaid'
import BasicLink from '../components/basicLink'

import {stockemoiseDatabase, stockemoiseUseCase} from '../utils/diagsMermaid'


const StockemoisePage = () => {
  const refs = [
    {label:'Webapp', ref:'https://stockemoise.onrender.com/', isGithub:'false'},
    {label:'Current website', ref:'https://stockemoise.be/', isGithub:'false'},
    {label:'Frontend', ref:'https://github.com/JBLNgithub/stockemoise', isGithub:'true'},
    {label:'Backend', ref:'https://github.com/JBLNgithub/stockemoise-backend', isGithub:'true'},
    {label:'API docs', ref:'https://stockemoise.onrender.com/api-docs/', isGithub:'false'},
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
            Frontend is a react App with tailwind for style. Datas are being save in json files until backend is done.
          </p>
          <p className='mt-4'>
            Backend is a REST API runing on an express.js server. Validations are made with <BasicLink lin='https://vinejs.dev/docs/introduction' label='vine' />. API documentations is generated with <BasicLink lin='https://swagger.io/' label='swagger' />. API test are available with <BasicLink lin='https://www.usebruno.com/' label='bruno' />. Password are hashed with <BasicLink lin='https://github.com/ranisalt/node-argon2' label='argon2' />.
          </p>
          <p className='mt-4'>
            Database is currently made with SQLite3.
          </p>
          <p className='mt-4'>
            The webapp allow admins to log in et manage concerts and news through built-in tools. CRUD fonctionnalities are implemented.
          </p>

          <UsedTechno>
            <SkillTile name='React' />
            <SkillTile name='Tailwind' />
            <SkillTile name='Node.js' />
            <SkillTile name='SQLite3' />
            <SkillTile name='Figma' />
            <SkillTile name='Mermaid' />
            <SkillTile name='Express' />
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
        
        <Comparator 
        label1='Use Case'
        label2='API tests'
        img1='useCaseStockemoise.png'
        img2='testsStockemoise.png'
        />

      </section>

      <section>
        <Mermaid title='Use Case' code={stockemoiseUseCase} />

        {/* <Mermaid title='EA Diag' code={stockemoiseDatabase} /> */}
      </section>
    </>
  )
}

export default StockemoisePage