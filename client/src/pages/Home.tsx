// components/Home.js
import { Heading } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <>
    <section className="bg-gray-50 bg-image">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center bg-white shadow-xl p-10" style={{zIndex:"1"}}>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          Crafting Connections.
            <strong className="font-extrabold text-amber-500 sm:block">
              Enhancing Engagement.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
          Experience the ultimate platform for home brewers. 
          Connect with like-minded brewing enthusiasts, share your recipes, techniques, and experiences, 
          and elevate your brewing skills to new heights. Cheers to the art of home brewing!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring sm:w-auto"
              to="/login"
            >
              Get Started
            </Link>

            {/* <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-amber-600 shadow hover:text-black focus:outline-none focus:ring active:text-amber-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
      </section>
      {/* <main className="container mx-auto py-8">
        <Heading level={3} className="text-center">
          Please use the buttons at the top to test out protected routes!
        </Heading>
      </main> */}
      </>
  );
}
export default Home;