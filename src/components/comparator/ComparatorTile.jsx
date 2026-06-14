import getImageURL from '../../utils/getImageURL'


const ComparatorTile = ({label, img, project}) => {
  return (
    <>
        <h3 className='text-2xl font-bold mb-5'>{label}</h3>
        <img src={getImageURL(img, project)} className='rounded-2xl border-2 inline-block' />
    </>
  )
}

export default ComparatorTile