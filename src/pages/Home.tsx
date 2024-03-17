import { Link } from 'react-router-dom';
export function Home() {

  return (
    <>
      <section className="bg-gray-50 hero relative overflow-hidden">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mx-auto max-w-3xl text-left p-lg-10" style={{zIndex:"1"}}>
              <div className="lg:text-8xl font-light text-4xl">
              Connect with a network of Beer brewers
              </div>

              <p className="mt-4 sm:text-xl/relaxed text-gray-600">
              Experience the ultimate platform for home brewers. 
              Connect with like-minded brewing enthusiasts, share your recipes, techniques, and experiences, 
              and elevate your brewing skills to new heights. Cheers to the art of home brewing!
              </p>

              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Link
                  className="block rounded-full bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring"
                  to="/login"
                >
                  Get Started
                </Link>

                {/* <a
                  className="block rounded px-12 py-3 text-sm font-medium text-amber-600 shadow hover:text-black focus:outline-none focus:ring active:text-amber-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="bg-gray-50">
        
        <div className="mx-auto max-w-screen-xl px-4 py-60 lg:flex lg:h-auto lg:items-center flex flex-col justify-center">
          <div className="lg:text-6xl font-light text-4xl mb-20 text-center">
              Start now in 3 easy steps
            </div>
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-row justify-center content-center items-center">
              <div className='font-bold text-4xl pr-3'>1</div>
              <p className="text-xl text-gray-500">Signup for an account in under 2 minutes, customize your profile and start adding your brews.</p>
            </div>
            <div className="flex flex-row justify-center content-center items-center">
              <div className='font-bold text-4xl pr-3'>2</div>
              <p className="text-xl text-gray-500">Engage with real people that have a similar passion for brewing.</p>
            </div>
            <div className="flex flex-row justify-center content-center items-center">
              <div className='font-bold text-4xl pr-3'>3</div>
              <p className="text-xl text-gray-500">Sit back, relax, create new brews and explore what others are creating.</p>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
          <Link
                  className=" rounded-full bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring"
                  to="/login"
                >
                  Get Started
                </Link>
                </div>
        </div>
      </section>


      <section className="bg-black about relative overflow-hidden">
        
        <div className="mx-auto max-w-screen-xl px-4 py-60 lg:flex lg:h-auto lg:items-center flex flex-col justify-center">
          <div className="lg:text-6xl font-light text-4xl mb-20 text-white text-center">
              Connect with real people and expand your passion.
            </div>
          <div className="max-w-2xl flex flex-row justify-center content-center gap-x-5 gap-y-5 flex-wrap">
            <div className="flex flex-row justify-center content-center items-center bg-transparent rounded-full border-2 border-white p-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-black">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="lightblue" />
                <path d="M9 13l2 2 4-4" />
              </svg>

              <p className="text-xl text-white px-2">Add to your toolbelt</p>
            </div>
            <div className="flex flex-row justify-center content-center items-center bg-transparent rounded-full border-2 border-white p-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-black">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="lightblue" />
                <path d="M9 13l2 2 4-4" />
              </svg>
              <p className="text-xl text-white px-2">Share the love</p>
            </div>
            <div className="flex flex-row justify-center content-center items-center bg-transparent rounded-full border-2 border-white p-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-black">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="lightblue" />
                <path d="M9 13l2 2 4-4" />
              </svg>
              <p className="text-xl text-white px-2">Explore different brews</p>
            </div>
            <div className="flex flex-row justify-center content-center items-center bg-transparent rounded-full border-2 border-white p-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-black">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="lightblue" />
                <path d="M9 13l2 2 4-4" />
              </svg>
              <p className="text-xl text-white px-2">Make new friends</p>
            </div>
            
          </div>
          <div className="mt-20 flex justify-center" style={{zIndex: '1'}}>
          <Link
                  className=" rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-white hover:text-black focus:outline-none focus:ring sm:w-auto"
                  to="/login"
                >
                  Get Started
                </Link>
                </div>
        </div>
      </section>


      <section className="bg-gray-50">
        
        <div className="mx-auto max-w-screen-xl px-4 py-60 lg:flex lg:h-auto lg:items-center flex flex-col justify-center">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col justify-start content-center">
              <div className="lg:text-6xl font-light text-4xl mb-8">
                Created by people just like you
              </div>
              <p className="text-xl text-gray-500">We're passionate about bringing people in the brewing industry together. Seeing people connect in a friendly virtual environment is a beautiful thing.</p>
            </div>
            <div className="flex flex-col justify-start content-center pl-lg-8">
              <div className='font-light lg:text-4xl text-2xl pr-3 pb-5'>Perfect For:</div>

              <div className="max-w-2xl flex flex-row justify-start content-center gap-x-5 gap-y-5 flex-wrap">
                    <div className="flex flex-row justify-center content-center bg-gray-200 rounded-full border-2 border-white p-2 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="black" />
                        <path d="M9 13l2 2 4-4" />
                      </svg>

                      <p className="text-xl text-black px-2">Professional Brewers</p>
                    </div>
                    <div className="flex flex-row justify-center content-center bg-gray-200 rounded-full border-2 border-white p-2 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="black" />
                        <path d="M9 13l2 2 4-4" />
                      </svg>

                      <p className="text-xl text-black px-2">Hobbiests</p>
                    </div>
                    <div className="flex flex-row justify-center content-center bg-gray-200 rounded-full border-2 border-white p-2 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="black" />
                        <path d="M9 13l2 2 4-4" />
                      </svg>

                      <p className="text-xl text-black px-2">Curious Brewers</p>
                    </div>
              </div>
            </div>

          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-20">
            <div className='bg-gray-200 p-8 rounded-lg'>
              <div className='font-bold text-4xl pr-3 pb-5 text-left'>Contribute to the Community</div>
              <p className='text-black'>Join our beer brewing community and share your unique brews with passionate beer enthusiasts worldwide, fostering a culture of camaraderie and creativity in the world of craft beer.</p>
            </div>
            <div className='bg-gray-200 p-8 rounded-lg'>
              <div className='font-bold text-4xl pr-3 pb-5 text-left'>Gain Experience</div>
              <p className='text-black'>Embark on a flavorful journey and expand your brewing expertise by following a diverse array of brewers. Gain valuable insights, explore new techniques, and be inspired by the rich tapestry of brewing experiences that our app's community has to offer.</p>
            </div>
            <div className='bg-gray-200 p-8 rounded-lg'>
              <div className='font-bold text-4xl pr-3 pb-5 text-left'>Follow Friends</div>
              <p className='text-black'>Discover a welcoming community of like-minded beer enthusiasts eager to share their passion for brewing. Forge lasting friendships, bond over the love of craft beer, and connect with fellow brewers around the globe, making every sip a celebration of camaraderie and shared experiences.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black questions relative overflow-hidden">
        
        <div className="mx-auto max-w-screen-xl px-4 py-60 lg:flex lg:h-auto flex flex-col justify-center">
          <div className="lg:text-7xl font-light text-4xl mb-20 text-white text-left">
              Got Questions? We would love to hear from you!
            </div>

          <div className="mt-20 max-w-screen-lg grid ml-500 lg:grid-cols-2 col-end">
            
                <div className="lg:text-3xl font-light text-4xl mb-20 text-white text-left">
                    Leave us a message and we will get in contact with you as soon as we can.
                  </div>
                  <div className='mt-6'>
                <Link
                  className="rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-white hover:text-black focus:outline-none focus:ring h-auto"
                  to="/login"
                >
                  Get Started
                </Link>
                </div>
                
                </div>
                </div>
      </section>
    </>
  );
}
export default Home;