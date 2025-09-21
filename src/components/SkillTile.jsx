import React from 'react'
import {FaPython, FaJava, FaHtml5, FaReact, FaFigma} from 'react-icons/fa'
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io5'
import {RiTailwindCssFill} from 'react-icons/ri'
import {SiMermaid} from 'react-icons/si'


const SkillTile = ({name}) => {
  const iconClass = 'text-neutral-800 inline mb-1 mr-1'

  function icon(name) {
    switch(name){
      case "Python":
        return(<FaPython className={iconClass} />)
      case "Java":
        return(<FaJava className={iconClass} />)
      case "Javascript":
        return(<IoLogoJavascript className={iconClass} />)
      case "HTML":
        return(<FaHtml5 className={iconClass} />)
      case "React":
        return(<FaReact className={iconClass} />)
      case "Tailwind":
        return(<RiTailwindCssFill className={iconClass} />)
      case "CSS":
        return(<IoLogoCss3 className={iconClass} />)
      case "Figma":
        return(<FaFigma className={iconClass} />)
      case "Mermaid":
        return(<SiMermaid className={iconClass} />)
      default:
        return ''
    }
  }

  return (
    <div className='bg-neutral-300 rounded-md mt-2 text-center py-1'>
      {icon(name)}
      {name}
    </div>
  )
}

export default SkillTile