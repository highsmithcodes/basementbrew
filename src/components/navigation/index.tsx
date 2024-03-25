import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {    


  const navigate = useNavigate();


  return (
      <>
        <nav aria-label="Tabs" className='w-full mt-5 p-5'>
          <ul className="flex flex-col w-full justify-start text-left">
            <li className="text-left rounded-3xl text-dark-yellow hover:bg-black hover:text-dark-yellow duration-100 mb-2 p-4">
              <Link className="text-sm font-bold" to="/brews">Your Brews</Link>
            </li>

            <li className="text-left rounded-3xl text-dark-yellow hover:bg-black hover:text-dark-yellow duration-100 mb-2 p-4">
              <Link className="text-sm font-bold" to="/all-brews">All Brews</Link>
            </li> 

            <li className="text-left rounded-3xl text-dark-yellow hover:bg-black hover:text-dark-yellow duration-100 mb-2 p-4">
              <Link className="text-sm font-bold" to="/liked-brews">Likes</Link>
            </li>

            <li className="text-left rounded-3xl text-dark-yellow hover:bg-black hover:text-dark-yellow duration-100 mb-2 p-4">
              <Link className="text-sm font-bold" to="/create-brew">Create Brew</Link>
            </li>

            <li className="text-left rounded-3xl text-dark-yellow hover:bg-black hover:text-dark-yellow duration-100 mb-2 p-4">
                <button
                  className="text-dark-yellow font-bold text-left rounded-3xl mb-6"
                 
                >
                  Logout
                </button>
            </li>

          </ul>
        </nav>
      </>
    )
}
export default Navigation