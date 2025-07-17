import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    src: "/gallery/medical/medi1.jpg",
    type: "image",
    title: "Media 1",
    description: "Description for medi1.jpg",
  },
  {
    src: "/gallery/medical/medi2.jpg",
    type: "image",
    title: "Media 2",
    description: "Description for medi2.jpg",
  },
  {
    src: "/gallery/medical/medi3.jpg",
    type: "image",
    title: "Media 3",
    description: "Description for medi3.jpg",
  },
  {
    src: "/gallery/medical/medi4.jpg",
    type: "image",
    title: "Media 4",
    description: "Description for medi4.jpg",
  },
  {
    src: "/gallery/medical/medi5.jpg",
    type: "image",
    title: "Media 5",
    description: "Description for medi5.jpg",
  },
  {
    src: "/gallery/medical/medi6.jpg",
    type: "image",
    title: "Media 6",
    description: "Description for medi6.jpg",
  },
  {
    src: "/gallery/medical/medi7.jpg",
    type: "image",
    title: "Media 7",
    description: "Description for medi7.jpg",
  },
  {
    src: "/gallery/medical/medi8.jpg",
    type: "image",
    title: "Media 8",
    description: "Description for medi8.jpg",
  },
  {
    src: "/gallery/medical/medi9.jpg",
    type: "image",
    title: "Media 9",
    description: "Description for medi9.jpg",
  },
  {
    src: "/gallery/medical/medi10.jpg",
    type: "image",
    title: "Media 10",
    description: "Description for medi10.jpg",
  },
  {
    src: "/gallery/medical/medi11.jpg",
    type: "image",
    title: "Media 11",
    description: "Description for medi11.jpg",
  },
  {
    src: "/gallery/medical/medi12.jpg",
    type: "image",
    title: "Media 12",
    description: "Description for medi12.jpg",
  },
  {
    src: "/gallery/medical/medi13.jpg",
    type: "image",
    title: "Media 13",
    description: "Description for medi13.jpg",
  },
];

const title = "Medical Gallery";
export default function Medical() {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
}
