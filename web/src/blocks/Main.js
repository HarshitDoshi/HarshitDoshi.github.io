const Main = (props) => {
  const { children } = props;
  return (
    <main className="bg-gray-50 dark:bg-gray-900 body-font flex-grow">
      {children}
    </main >
  );
}

export default Main;