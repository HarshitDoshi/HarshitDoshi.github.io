const Main = (props) => {
  const { children } = props;
  return (
    <main className="bg-gray-900 text-gray-100 body-font flex-grow">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="px-4 py-2 justify-center">
          {children}
        </div>
      </section>
    </main >
  );
}

export default Main;