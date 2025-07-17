import { Link } from "react-router";

const galleryItems = [
  {
    href: "/gallery/quiz_quest_2024",
    src: "/images/2024.jpg",
    alt: "Quiz Quest 2024",
    title: "Quiz Quest 2024",
    description:
      "Igniting young minds through the thrill of knowledge at Quiz Quest 2024.",
  },
  {
    href: "/gallery/quiz_quest_2025",
    src: "/images/2025.jpg",
    alt: "Quiz Quest 2025",
    title: "Quiz Quest 2025",
    description:
      "The journey of curiosity continues with an even bigger Quiz Quest 2025.",
  },
  {
    href: "/gallery/education",
    src: "/images/edu.jpg",
    alt: "Education",
    title: "Education",
    description: "Empowering futures through impactful educational outreach.",
  },
  {
    href: "/gallery/medical",
    src: "/images/medi.jpg",
    alt: "Medical",
    title: "Medical",
    description:
      "Bringing healthcare closer to communities, one initiative at a time.",
  },
  {
    href: "/gallery/yoga_utsav",
    src: "/images/yoga.jpg",
    alt: "Yoga Utsav",
    title: "Yoga Utsav",
    description: "Celebrating wellness and harmony at our annual Yoga Utsav.",
  },
  {
    href: "/gallery/csr_recognition",
    src: "/images/crs.jpg",
    alt: "CSR Recognition",
    title: "CSR Recognition",
    description:
      "Corporate Social Responsibility Recognition received honouring impactful partnerships that drive social change.",
  },
];

export default function GalleryIndex() {
  return (
    <div className="px-6 md:px-20 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9">
        {galleryItems.map((item) => (
          <Link
            to={item.href}
            className="flex flex-col h-full bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <div className="h-80 w-full overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-auto">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <footer className="text-center mt-12 text-sm text-gray-500">
        © 2025 Rotary Club of Pune Professionals. All rights reserved.
      </footer>
    </div>
  );
}
