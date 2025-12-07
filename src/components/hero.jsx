
import myImage from "../assets/myphoto.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-3 sm:px-4 md:px-6 pt-20 md:pt-24 lg:pt-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>
      {/* Left Side - Text */}
      <div className="text-center lg:text-left w-full max-w-full sm:max-w-2xl lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 z-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-semibold px-2 sm:px-0">Welcome to My Portfolio</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-0">
          I'm Lithira Hettiarachchi
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 px-2 sm:px-0">
          A passionate full-stack developer exploring the world of code and creativity.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-0 lg:ml-12 lg:w-1/2 flex justify-center z-10">
        {/* Gradient frame wrapper */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300">
          <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[500px]">
            <img
              src={myImage}
              alt="Lithira"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
