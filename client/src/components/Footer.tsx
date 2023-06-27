import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
         <div className='text-3xl text-white'>Basement Brew</div>
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left"
        >
          Vibrant community, valuable resources, and interactive features designed to enhance your passion for brewing.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            About
          </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            Services
          </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            Projects
          </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            Blog
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-white lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;