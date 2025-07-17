import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    type: "image",
    src: "/gallery/2025/quizbanner.jpg",
    title: "Title image",
    description: "descirption dummy",
  },
];

const title = "Quiz Quest 2025 Gallery";
export default function Gallery2025() {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
}
