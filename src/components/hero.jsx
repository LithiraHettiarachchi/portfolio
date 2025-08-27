
import myImage from "../assets/myphoto.jpg"; // adjust the path

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>
      {/* Left Side - Text */}
      <div className="text-center lg:text-left max-w-2xl lg:w-1/2 space-y-6">
        <p className="text-xl text-gray-400 font-semibold">Welcome to My Portfolio</p>
        <h1 className="text-9xl font-bold">I’m Lithira Hettiarachchi</h1>
        <p className="text-4xl text-gray-300">
          A passionate full-stack developer exploring the world of code and creativity.
        </p>
      </div>

      {/* Right Side - Image */}
        <div className="relative mt-10 lg:mt-0 lg:ml-12 lg:w-1/2 flex justify-center">
        {/* Gradient frame wrapper */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300 mt-6">
            <div className="relative w-64 h-80 lg:w-96 lg:h-[500px]">
            <img
                src={myImage}
                alt="Lithira"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-transparent rounded-2xl" />
            </div>
        </div>
        </div>

    </section>
  );
}
