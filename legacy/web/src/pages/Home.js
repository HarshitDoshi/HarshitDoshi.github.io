import DeveloperZen from "../assets/illustrations/developer.svg";

function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-start md:justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center w-full md:h-full md:w-1/2">
          <div className="md:w-10/12 shadow-lg graph-background dark:bg-gray-900 rounded-lg px-4 py-4 mx-2 my-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col justify-start items-center">
              <div className="flex flex-row justify-center items-center">
                <h2 className="text-hdblue text-4xl font-black">Harshit Doshi</h2>
              </div>
              <div className="flex flex-row justify-center items-center my-2 text-gray-600 dark:text-gray-300">
                <h3 className="mx-1 my-2 md:mx-2 text-sm">🚀 Engineer</h3>
                <h3 className="mx-1 my-2 md:mx-2 text-sm">💻 Developer</h3>
                <h3 className="mx-1 my-2 md:mx-2 text-sm">🎨 Designer</h3>
              </div>
              <div>
                <p className="font-sans text-lg text-gray-600 dark:text-gray-300 my-2 font-bold">🙋🏻‍♂️ Hey! Here's a bit about me:</p>
                <p className="font-sans text-md text-gray-600 dark:text-gray-300 my-2 font-semibold">🌞 By day, I am a corporate workhorse like many of you. I love it! I am a systems engineer and get to work on cool, cutting-edge technologies. 🌛 By night, you'd find me buried behind my battlestation coding away in Python and JavaScript, trying to build <span>shunyaek</span>.</p>
                <p className="font-sans text-md text-gray-600 dark:text-gray-300 my-2 font-semibold">🟢 My fondness for design stems from the world of photography and film-making. I discovered how computers can help enhance and augment my photos. This led me to discover graphics design. I slowly found aniche in the world of design that was the most attractive to me: UI/UX design. I sarted experimenting and creating. Now, I design as a hobby and a way to refresh my mind!</p>
                <p className="font-sans text-md text-gray-600 dark:text-gray-300 my-2 font-semibold">🔵 When I am not behind a computer, you might find me driving. I love cars. Driving with my favourite playlist on the stereo is my zen.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:h-full md:w-1/2 circuit-background md:bg-black-art md:bg-no-repeat bg-center md:bg-cover filter invert dark:invert-0 md:dark:invert-0">
          <div className="h-full w-full bg-gradient-to-t from-gray-50 dark:from-gray-900 md:bg-gradient-to-r md:from-gray-50 md:dark:from-gray-900 filter invert dark:invert-0 md:dark:invert-0">
            <img src={DeveloperZen} alt="Developer - Harshit Doshi" className="filter hue-rotate-180"></img>
            <div className="flex flex-row justify-center items-center">
              <h2 className="text-transparent text-4xl font-black">Harshit Doshi</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;