import FooterTabs from "./FooterTabs";

const Footer = () => {
  /* return (
    <footer className="w-full fixed bottom-0 z-50 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 body-font border-t-2 border-gray-100 dark:border-gray-800">
      <div className="container px-5 py-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p className="text-md text-gray-900 dark:text-gray-50">©<span className="px-1 font-bold text-mono text-hdblue">Harshit Doshi</span>{new Date().getFullYear()}.</p>
      </div>
    </footer>
  ); */
  return (
    <footer className="w-full fixed bottom-0 z-50 px-4 py-2 flex flex-col self-center place-self-center justify-center items-center bg-gray-50 dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
      <FooterTabs />
    </footer>
  )
};

export default Footer;