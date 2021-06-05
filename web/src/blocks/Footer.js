import React from 'react';

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 body-font border-t-2 border-gray-100 dark:border-gray-800">
      <div className="container px-5 py-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p className="text-md text-gray-900 dark:text-gray-50">©<span className="px-1 font-bold text-mono text-hdblue">Harshit Doshi</span>{new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;