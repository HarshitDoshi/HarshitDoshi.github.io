interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps) => {
  const { children } = props;
  return (
    <main className="w-full max-h-screen h-full z-10 pt-20 pb-24 bg-material-grey-0 dark:bg-material-grey-0 body-font flex-grow">
      {children}
    </main >
  );
}

export default Main;