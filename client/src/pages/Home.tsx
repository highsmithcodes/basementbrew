// components/Home.js
import { Heading } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <>
    <section className="bg-gray-50">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-red-700 sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/login"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
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