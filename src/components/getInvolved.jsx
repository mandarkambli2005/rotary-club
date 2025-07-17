export default function GetInvolved() {
  const sections = [
    {
      title: "Rotary Clubs",
      image:
        "https://www.rotary.org/sites/default/files/styles/w_350/public/get-involved-rotaryclub.jpg?itok=eIeyNIgp",
      description:
        "Rotary clubs bring together people across generations who share the ideals of service, leadership, diversity, friendship, and integrity to create lasting change in the world, in their communities, and in themselves.",
    },
    {
      title: "Rotaract Clubs",
      image:
        "https://www.rotary.org/sites/default/files/styles/w_350/public/get-involved-rotaract.jpg?itok=BXpc8dzh",
      description:
        "Rotaract clubs bring together young people ages 18 and older in communities worldwide to organize service activities, develop leadership skills, and socialize.",
    },
    {
      title: "Interact Clubs",
      image:
        "https://www.rotary.org/sites/default/files/styles/w_350/public/get-involved-interact.png?itok=T_tnRt-i",
      description:
        "Through Interact clubs, people ages 12-18 connect with others in their community or school and learn about the world through service projects and activities.",
    },
    {
      title: "Rotary Action Groups",
      image:
        "https://clubrunner.blob.core.windows.net/00000050023/Images/Go-Green-Challenge-Cleanup.jpg",
      description:
        "Connect with Rotary members and friends of Rotary who are experts in a particular field by joining a Rotary Action Group. Group members share their expertise by collaborating with clubs and districts on service projects.",
    },
    {
      title: "Rotary Fellowships",
      image:
        "https://www.rotary.org/sites/default/files/styles/w_350/public/get-involved-fellowships.jpg?itok=62mjNb1D",
      description:
        "Interested in scuba diving or marathon running? Want to use your skills as a doctor or environmentalist to make a difference? Share your hobby or vocation with other club members, their partners, and friends of Rotary.",
    },
    {
      title: "Rotary Community Corps",
      image:
        "https://rotaryserviceblog.org/wp-content/uploads/2023/05/rcc-of-plano-douglass-community-1.jpg?w=801",
      description:
        "Rotary Community Corps bring together community members to plan and carry out sustainable projects that address local needs, fostering collaboration and positive change.",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-12">
      {/* Header Section */}
      <div className="relative h-56 flex items-center justify-center rounded shadow mb-8 overflow-hidden">
        <img
          src="https://clubrunner.blob.core.windows.net/00000000952/Stories/99f4e8f7-9667-4da3-baf2-c0d76cce28c3.jpg"
          alt="Get Involved"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
        <h1 className="relative z-20 text-white text-4xl font-bold">
          Get Involved
        </h1>
      </div>

      <p className="text-lg text-gray-700 mb-10">
        Join Rotary's more than 1.2 million neighbors, friends, leaders, and
        problem-solvers who see a world where people unite and take action to
        create lasting change — across the globe, in our communities, and in
        ourselves.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {section.description}
              </p>
              <a
                href="#"
                className="text-blue-700 hover:underline font-semibold text-sm"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 mt-16 p-6 rounded shadow text-center">
        <p className="font-bold text-lg mb-2">
          Your time, energy, and a passion to improve your world are all you
          need to get involved with Rotary.
        </p>
        <p>
          Become one of Rotary's people of action or explore the many
          opportunities we have for anyone — whatever your age or interest — who
          wants to improve lives in communities near and far. Connect with a
          local club to find out how you can get involved.
        </p>
      </div>
    </div>
  );
}
