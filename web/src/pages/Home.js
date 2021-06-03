function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center h-full w-1/2">
          <h1 className="text-8xl font-black p-4 rounded text-hdblue">Coming soon...</h1>
        </div>
        <div className="flex flex-col justify-start items-center h-full w-1/2 bg-black-art bg-no-repeat bg-center bg-cover filter invert dark:invert-0">
          <div className="h-full w-full bg-gradient-to-r from-gray-50 dark:from-gray-900 filter invert dark:invert-0">
            <div className="h-full w-full bg-developer-3d bg-no-repeat bg-center bg-contain filter hue-rotate-180"></div>
          </div>
        </div>
      </div>
      {/* <div className="mt-2 flex flex-row flex-wrap justify-center">
        <div className="flex flex-col flex-wrap justify-center items-center h-full">
          <h2 className="h-full text-4xl font-black p-4 rounded text-green-500 font-serif">Welcome to my personal spot on the Internet!</h2>
          <p>This is where I put my whimsy to rest. I write on technology, design, and random thoughts from the deeps of my mind.</p>
        </div>
      </div> */}
    </>
  );
}

export default Home;