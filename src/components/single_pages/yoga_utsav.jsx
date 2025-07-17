import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    src: "/gallery/yoga/g10.mp4",
    type: "video",
    title: "Yoga Utsav Video 1",
    description: "Experience the energy of Yoga Utsav.",
  },
  {
    src: "/gallery/yoga/yg1.jpg",
    type: "image",
    title: "Yoga Utsav Image 1",
    description: "Moments of peace and balance.",
  },
  {
    src: "/gallery/yoga/yg2.mp4",
    type: "video",
    title: "Yoga Utsav Video 2",
    description: "Guided breathing and movement session.",
  },
  {
    src: "/gallery/yoga/yg3.mp4",
    type: "video",
    title: "Yoga Utsav Video 3",
    description: "A community united in wellness.",
  },
  {
    src: "/gallery/yoga/yg4.mp4",
    type: "video",
    title: "Yoga Utsav Video 4",
    description: "Synchronizing breath with posture.",
  },
  {
    src: "/gallery/yoga/yg5.mp4",
    type: "video",
    title: "Yoga Utsav Video 5",
    description: "Rejuvenation through movement.",
  },
  {
    src: "/gallery/yoga/yg6.mp4",
    type: "video",
    title: "Yoga Utsav Video 6",
    description: "Harmony of mind and body.",
  },
  {
    src: "/gallery/yoga/yg7.mp4",
    type: "video",
    title: "Yoga Utsav Video 7",
    description: "Celebrating inner calm.",
  },
  {
    src: "/gallery/yoga/yg8.mp4",
    type: "video",
    title: "Yoga Utsav Video 8",
    description: "Unity through mindfulness.",
  },
  {
    src: "/gallery/yoga/yg9.mp4",
    type: "video",
    title: "Yoga Utsav Video 9",
    description: "Wellness session highlight.",
  },
  {
    src: "/gallery/yoga/g10.mp4",
    type: "video",
    title: "Yoga Utsav Video 10",
    description: "Stretch and breathe together.",
  },
  {
    src: "/gallery/yoga/yg11.mp4",
    type: "video",
    title: "Yoga Utsav Video 11",
    description: "Morning yoga at its best.",
  },
  {
    src: "/gallery/yoga/yg12.mp4",
    type: "video",
    title: "Yoga Utsav Video 12",
    description: "Moments of movement and peace.",
  },
  {
    src: "/gallery/yoga/yg13.mp4",
    type: "video",
    title: "Yoga Utsav Video 13",
    description: "Energetic group session.",
  },
  {
    src: "/gallery/yoga/yg14.mp4",
    type: "video",
    title: "Yoga Utsav Video 14",
    description: "Posture perfection captured live.",
  },
  {
    src: "/gallery/yoga/yg15.mp4",
    type: "video",
    title: "Yoga Utsav Video 15",
    description: "Evening relaxation event.",
  },
  {
    src: "/gallery/yoga/yg16.mp4",
    type: "video",
    title: "Yoga Utsav Video 16",
    description: "Breath-led community yoga.",
  },
  {
    src: "/gallery/yoga/yg17.mp4",
    type: "video",
    title: "Yoga Utsav Video 17",
    description: "Vibrant participation all around.",
  },
  {
    src: "/gallery/yoga/yg18.mp4",
    type: "video",
    title: "Yoga Utsav Video 18",
    description: "Outdoor yoga vibes.",
  },
  {
    src: "/gallery/yoga/yg19.mp4",
    type: "video",
    title: "Yoga Utsav Video 19",
    description: "Balance and flow practice.",
  },
  {
    src: "/gallery/yoga/yg20.mp4",
    type: "video",
    title: "Yoga Utsav Video 20",
    description: "Sunrise yoga session.",
  },
  {
    src: "/gallery/yoga/yg21.mp4",
    type: "video",
    title: "Yoga Utsav Video 21",
    description: "Reflections from the mat.",
  },
  {
    src: "/gallery/yoga/yg22.mp4",
    type: "video",
    title: "Yoga Utsav Video 22",
    description: "Mindful movement captured.",
  },
  {
    src: "/gallery/yoga/yg23.jpg",
    type: "image",
    title: "Yoga Utsav Image 2",
    description: "Celebrating stillness in motion.",
  },
];

const title = "Yoga Utsav Gallery";
export default function YogaUtsav() {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
}
