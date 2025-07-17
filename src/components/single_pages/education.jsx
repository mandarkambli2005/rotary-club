import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    src: "/gallery/education/edu1.jpg",
    type: "image",
    title: "Education 1",
    description: "Description for edu1.jpg",
  },
  {
    src: "/gallery/education/edu2.jpg",
    type: "image",
    title: "Education 2",
    description: "Description for edu2.jpg",
  },
  {
    src: "/gallery/education/edu3.jpg",
    type: "image",
    title: "Education 3",
    description: "Description for edu3.jpg",
  },
  {
    src: "/gallery/education/edu4.jpg",
    type: "image",
    title: "Education 4",
    description: "Description for edu4.jpg",
  },
  {
    src: "/gallery/education/edu5.jpg",
    type: "image",
    title: "Education 5",
    description: "Description for edu5.jpg",
  },
  {
    src: "/gallery/education/edu6.jpg",
    type: "image",
    title: "Education 6",
    description: "Description for edu6.jpg",
  },
  {
    src: "/gallery/education/edu7.jpg",
    type: "image",
    title: "Education 7",
    description: "Description for edu7.jpg",
  },
  {
    src: "/gallery/education/edu8.jpg",
    type: "image",
    title: "Education 8",
    description: "Description for edu8.jpg",
  },
  {
    src: "/gallery/education/edu9.jpg",
    type: "image",
    title: "Education 9",
    description: "Description for edu9.jpg",
  },
  {
    src: "/gallery/education/edu10.jpg",
    type: "image",
    title: "Education 10",
    description: "Description for edu10.jpg",
  },
  {
    src: "/gallery/education/edu11.jpg",
    type: "image",
    title: "Education 11",
    description: "Description for edu11.jpg",
  },
  {
    src: "/gallery/education/edu12.jpg",
    type: "image",
    title: "Education 12",
    description: "Description for edu12.jpg",
  },
  {
    src: "/gallery/education/edu13.jpg",
    type: "image",
    title: "Education 13",
    description: "Description for edu13.jpg",
  },
  {
    src: "/gallery/education/edu14.jpg",
    type: "image",
    title: "Education 14",
    description: "Description for edu14.jpg",
  },
  {
    src: "/gallery/education/edu15.jpg",
    type: "image",
    title: "Education 15",
    description: "Description for edu15.jpg",
  },
  {
    src: "/gallery/education/edu16.jpg",
    type: "image",
    title: "Education 16",
    description: "Description for edu16.jpg",
  },
  {
    src: "/gallery/education/edu17.jpg",
    type: "image",
    title: "Education 17",
    description: "Description for edu17.jpg",
  },
  {
    src: "/gallery/education/edu18.jpg",
    type: "image",
    title: "Education 18",
    description: "Description for edu18.jpg",
  },
  {
    src: "/gallery/education/edu19.jpg",
    type: "image",
    title: "Education 19",
    description: "Description for edu19.jpg",
  },
  {
    src: "/gallery/education/edu20.jpg",
    type: "image",
    title: "Education 20",
    description: "Description for edu20.jpg",
  },
];

const title = "Education gallery";
export default function Education() {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
}
