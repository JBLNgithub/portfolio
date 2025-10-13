import RenderMermaid from 'react-x-mermaid'

const Mermaid = ({title, code}) => {
  return (
    <div className='mt-20'>
        <h3 className='text-center font-bold text-3xl mb-8'>{title}</h3>
        <RenderMermaid mermaidCode={code} mermaidConfig={{ theme: "light" }} />
    </div>
  )
}

export default Mermaid