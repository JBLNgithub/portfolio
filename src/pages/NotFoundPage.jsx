import { Link } from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'


const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center">
        <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
        <h1>404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
            to="/"
            className="text-neutral-200 bg-neutral-800 hover:text-neutral-800 hover:bg-sky-500 rounded-md px-3 py-2 mt-4"
            >Return
        </Link>
    </section>
  )
}

export default NotFoundPage