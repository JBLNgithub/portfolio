const BasicLink = ({lin, label}) => {
  return (
    <a className='text-blue-700 hover:text-sky-400' href={lin} target='_blank'>{label}</a>
  )
}

export default BasicLink