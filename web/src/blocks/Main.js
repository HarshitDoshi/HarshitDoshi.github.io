const Main = (props) => {
  const { children } = props;
  return (
    <main className="w-full z-10 pt-16 pb-8 bg-gray-50 dark:bg-gray-900 body-font flex-grow">
      {children}
    </main >
  );
}

export default Main;