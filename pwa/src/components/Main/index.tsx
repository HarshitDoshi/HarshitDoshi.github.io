interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps) => {
  const { children } = props;
  return (
    <main className="w-full z-10 pt-16 pb-16 bg-gray-50 dark:bg-gray-900 body-font flex-grow">
      {children}
    </main >
  );
}

export default Main;