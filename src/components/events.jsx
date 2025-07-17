import { Calendar, MapPin, Users, Award, ChevronRight } from "lucide-react";

export default function Events() {
  const handleViewResults = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegisterNow = () => {
    window.location.href = "/registration";
  };

  const events = [
    {
      year: 2025,
      date: "August 23, 2025",
      title: "Quiz Quest 2025",
      description:
        "Get ready for the 2025 edition on August 23, 2025. This upcoming event promises an exciting challenge for students worldwide. Register now to participate!",
      image: "/images/quiz competition.jpg",
      action: "Register Now",
      status: "upcoming",
      participants: "500+ Expected",
      location: "Global Virtual Event",
      highlights: [
        "International Participation",
        "Digital Certificates",
        "Cash Prizes",
      ],
    },
    {
      year: 2024,
      date: "August 24, 2024",
      title: "Quiz Quest 2024",
      description:
        "Join us for the 2024 edition held on August 24, 2024. This event featured participants from multiple countries, showcasing their skills and celebrating educational achievements.",
      image: "/images/quest 2024.jpg",
      action: "View Results",
      status: "completed",
      participants: "450 Participants",
      location: "25 Countries",
      highlights: ["Record Participation", "New Categories", "Success Stories"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen max-h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="px-6 md:px-20 text-white max-w-4xl">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-600 bg-opacity-80 rounded-full text-sm font-semibold">
                Annual Global Event
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Rotary Club
                <br />
                <span className="text-blue-300">International Quiz</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                Empowering young minds through global knowledge exchange. Join
                us for our annual celebration of learning and leadership.
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span>Global Participation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-300" />
                  <span>Excellence Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Display Section */}
      <div className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quiz Quest Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our journey of educational excellence and global
              collaboration through our annual quiz competitions.
            </p>
          </div>

          <div className="space-y-20">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${index % 2 !== 0 ? "md:col-start-2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          event.status === "upcoming"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.status === "upcoming"
                          ? "Upcoming Event"
                          : "Past Event"}
                      </div>
                      <div className="text-gray-500 font-medium">
                        {event.year}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>{event.participants}</span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Event Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={
                        event.status === "upcoming"
                          ? handleRegisterNow
                          : handleViewResults
                      }
                      className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                        event.status === "upcoming"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {event.action}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative ${index % 2 !== 0 ? "md:col-start-1" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const placeholder = document.createElement("div");
                          placeholder.className =
                            "w-full h-80 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center rounded-2xl";
                          placeholder.innerHTML = `
                            <div class="text-center text-white">
                              <div class="text-6xl mb-4">🏆</div>
                              <div class="text-xl font-semibold">${event.title}</div>
                            </div>
                          `;
                          e.target.parentElement.appendChild(placeholder);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Floating Year Badge */}
                    <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">
                        {event.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Join the Next Quest?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Be part of our global community of learners and leaders
              </p>
              <button
                onClick={handleRegisterNow}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Notified for Future Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
