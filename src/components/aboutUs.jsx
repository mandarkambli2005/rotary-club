import { useState, useEffect } from "react";

export default function AboutUs() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const members = [
    {
      name: "David Bobanick",
      quote: "What started out as volunteering became my life's work.",
      image:
        "https://pluspng.com/img-png/person-in-a-suit-png-find-a-mediator-in-your-local-area-click-here-600.png",
      role: "Community Leader",
    },
    {
      name: "Bryant Wallace",
      quote: "Expand who you are today, to who you want to become.",
      image:
        "https://cdn.pixabay.com/photo/2024/02/21/14/53/ai-generated-8587845_640.png",
      role: "Business Professional",
    },
    {
      name: "Linda Low",
      quote:
        "The skills I've learned have allowed me to level up and have greater impact in my work.",
      image: "https://tse1.mm.bing.net/th/id/OIP.-HMu7O4KJqXu5LffY7DDfgHaF7",
      role: "Educational Advocate",
    },
  ];

  const causes = [
    {
      icon: "🕊️",
      title: "Promote peace",
      description: "Building bridges between communities",
    },
    {
      icon: "🏥",
      title: "Fight disease",
      description: "Combating health challenges globally",
    },
    {
      icon: "💧",
      title: "Provide clean water",
      description: "Ensuring access to sanitation and hygiene",
    },
    {
      icon: "👶",
      title: "Save mothers and children",
      description: "Protecting vulnerable populations",
    },
    {
      icon: "📚",
      title: "Support education",
      description: "Empowering through learning",
    },
    {
      icon: "💼",
      title: "Grow local economies",
      description: "Creating sustainable opportunities",
    },
    {
      icon: "🌍",
      title: "Protect the environment",
      description: "Preserving our planet for future generations",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) =>
        prevIndex === members.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [members.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === members.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700"
          style={{
            backgroundImage:
              "url('https://clubrunner.blob.core.windows.net/00000010961/PhotoAlbum/sample-rotary-promotion-pics/Rotary-example.PNG')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              A global network of change-makers united by purpose
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 space-y-20">
        {/* Introduction */}
        <div
          id="animate-intro"
          className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible["animate-intro"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Rotary is a global network of more than 1.2 million neighbors,
            friends, leaders, and problem-solvers who see a world where people
            unite and take action to create lasting change — across the globe,
            in our communities, and in ourselves.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                Solving real problems takes real commitment and vision. For more
                than 110 years, Rotary's people of action have used their
                passion, energy, and intelligence to take action on sustainable
                projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                From literacy and peace to water and health, we are always
                working to better our world, and we stay committed to the end.
                Learn more about our structure, our foundation, and our
                strategic vision.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div
          id="animate-causes"
          className={`transform transition-all duration-1000 ${
            isVisible["animate-causes"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <div
                key={index}
                className={`group bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 ${
                  index >= causes.length - 3
                    ? "col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 justify-self-center"
                    : ""
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cause.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cause.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision */}
        <div
          id="animate-mission"
          className={`grid md:grid-cols-2 gap-12 transform transition-all duration-1000 ${
            isVisible["animate-mission"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed">
              We provide service to others, promote integrity, and advance world
              understanding, goodwill, and peace through our fellowship of
              business, professional, and community leaders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Vision Statement</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Together, we see a world where people unite and take action to
              create lasting change — across the globe, in our communities, and
              in ourselves.
            </p>
          </div>
        </div>

        {/* Members Section */}
        <div
          id="animate-members"
          className={`transform transition-all duration-1000 ${
            isVisible["animate-members"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            See how Rotary has made a difference
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            in the lives of our members
          </p>

          {/* Featured Member Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={members[currentMemberIndex].image}
                    alt={members[currentMemberIndex].name}
                    className="w-full h-64 md:h-96 object-contain bg-gray-100"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {currentMemberIndex + 1} / {members.length}
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">
                      {members[currentMemberIndex].name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {members[currentMemberIndex].role}
                    </p>
                    <blockquote className="text-xl text-gray-600 leading-relaxed italic">
                      "{members[currentMemberIndex].quote}"
                    </blockquote>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 w-fit transform hover:scale-105 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Video
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
              onClick={nextMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
          </div>

          {/* Member Thumbnails */}
          <div className="flex justify-center gap-4">
            {members.map((member, index) => (
              <button
                key={index}
                onClick={() => setCurrentMemberIndex(index)}
                className={`w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === currentMemberIndex
                    ? "border-blue-500 scale-110"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          id="animate-cta"
          className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl text-center transform transition-all duration-1000 ${
            isVisible["animate-cta"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our global network of changemakers and help create lasting
            impact in communities worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  );
}
