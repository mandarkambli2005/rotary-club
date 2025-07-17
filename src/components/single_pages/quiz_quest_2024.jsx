import React from "react";

import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    type: "image",
    src: "/gallery/2024/07.jpg",
    title: "Image Title 1",
    description: "Description 1",
  },
  {
    type: "image",
    src: "/gallery/2024/08.jpg",
    title: "Image Title 2",
    description: "Description 2",
  },
  {
    type: "image",
    src: "/gallery/2024/09.jpg",
    title: "Image Title 3",
    description: "Description 3",
  },
  {
    type: "video",
    src: "/gallery/2024/10.mp4",
    title: "Video Title 1",
    description: "Video Description 1",
  },
  {
    type: "image",
    src: "/gallery/2024/110.jpg",
    title: "Image Title 4",
    description: "Description 4",
  },
  {
    type: "video",
    src: "/gallery/2024/11.mp4",
    title: "Video Title 2",
    description: "Video Description 2",
  },
  {
    type: "image",
    src: "/gallery/2024/1.jpg",
    title: "Image Title 5",
    description: "Description 5",
  },
  {
    type: "image",
    src: "/gallery/2024/2.jpg",
    title: "Image Title 6",
    description: "Description 6",
  },
  {
    type: "image",
    src: "/gallery/2024/3.jpg",
    title: "Image Title 7",
    description: "Description 7",
  },
  {
    type: "image",
    src: "/gallery/2024/4.jpg",
    title: "Image Title 8",
    description: "Description 8",
  },
  {
    type: "image",
    src: "/gallery/2024/5.jpg",
    title: "Image Title 9",
    description: "Description 9",
  },
  {
    type: "image",
    src: "/gallery/2024/6.jpg",
    title: "Image Title 10",
    description: "Description 10",
  },
  {
    type: "video",
    src: "/gallery/2024/7.mp4",
    title: "Video Title 3",
    description: "Video Description 3",
  },
  {
    type: "video",
    src: "/gallery/2024/8.mp4",
    title: "Video Title 4",
    description: "Video Description 4",
  },
  {
    type: "video",
    src: "/gallery/2024/9.mp4",
    title: "Video Title 5",
    description: "Video Description 5",
  },
];

const title = "Quiz Quest 2024 Gallery";

const Gallery2024 = () => {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
};

export default Gallery2024;
