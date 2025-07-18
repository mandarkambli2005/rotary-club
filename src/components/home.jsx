import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const navigate = useNavigate();

  const newsFeatures = [
    {
      image: "/images/-Francesco-Arezzo-.jpg",
      title: "A chat with 2025-26 RI President Francesco Arezzo",
      description:
        "Discover leadership insights and the vision for the upcoming year.",
    },
    {
      image: "/images/columbia peace.jpg",
      title: "Rotary announces US$2M grant to foster peace",
      description: "A groundbreaking Programs of Scale initiative in Colombia.",
    },
    {
      image: "/images/lesson.jpg",
      title: "Lesson plan given a global reach",
      description:
        "Empowering classrooms with impactful tools across continents.",
    },
    {
      image: "/images/international quiz.jpg",
      title: "International Quiz Competition 2024",
      description: "Students worldwide showcase their knowledge and skills.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === newsFeatures.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [newsFeatures.length]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const nextNews = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === newsFeatures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevNews = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? newsFeatures.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Auto-Playing Video */}
      <div className="relative w-full h-screen bg-black overflow-hidden max-w-[100vw] max-h-[100vh]">
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">Loading...</p>
            </div>
          </div>
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          className="absolute top-0 left-0 w-full h-full object-cover md:aspect-[16/9] max-md:aspect-[9/16] max-md:orientation-landscape:aspect-[16/9]"
        >
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl mx-auto transform animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We are <span className="text-blue-400">People of Action</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Our global network of more than 1.2 million neighbors, friends,
              and leaders volunteer their skills and resources to solve issues
              and address community needs.
            </p>
            <button
              onClick={() => navigate("/get-involved")}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              TAKE ACTION WITH US
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section with Animation */}
      <div className="relative py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-blue-300 to-blue-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img
                    src="/images/earth.png"
                    alt="Earth"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3">WE CONNECT PEOPLE</h2>
                <p className="text-lg opacity-90">
                  More than 1.2 million members worldwide
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-blue-300 to-blue-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img
                    src="/images/community.png"
                    alt="Community"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3">WE TRANSFORM COMMUNITIES</h2>
                <p className="text-lg opacity-90">
                  Approximately 47 million volunteer hours each year
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-blue-300 to-blue-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img
                    src="/images/funds.png"
                    alt="Funds"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3">WE FUND SUSTAINABLE PROJECTS</h2>
                <p className="text-lg opacity-90">
                  $291 million awarded for global service initiatives in 2023-24
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News and Features Carousel */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            News and Features
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={newsFeatures[currentNewsIndex].image}
                  alt={newsFeatures[currentNewsIndex].title}
                  className="w-full h-full object-contain bg-gray-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-3xl">
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                      {newsFeatures[currentNewsIndex].title}
                    </h3>
                    <p className="text-xl opacity-90 leading-relaxed">
                      {newsFeatures[currentNewsIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevNews}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextNews}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {newsFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentNewsIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Help us create lasting change
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Solving some of the world's most complex and pressing problems
                takes real commitment and vision. Rotary members believe that we
                share a responsibility to take action to improve our
                communities. Join us, so that we can make an even bigger impact
                together.
              </p>
              <button
                onClick={() => navigate("/get-involved")}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                GET INVOLVED
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/community work.jpg"
                  alt="Community Work"
                  className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-contain bg-white transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            No challenge is too big for us
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            For more than a century, we've bridged cultures and connected
            continents. We champion peace, fight illiteracy and poverty, help
            people get access to clean water and sanitation, and fight disease.
            Our newest cause is to protect our planet and its resources.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}