import MediaGallery from "./mediaGallery";

const mediaItems = [
  {
    src: "/gallery/crs/crs1.jpg",
    type: "image",
    title: "CSR Recognition 1",
    description: "Description for crs1.jpg",
  },
  {
    src: "/gallery/crs/crs2.jpg",
    type: "image",
    title: "CSR Recognition 2",
    description: "Description for crs2.jpg",
  },
  {
    src: "/gallery/crs/crs3.jpg",
    type: "image",
    title: "CSR Recognition 3",
    description: "Description for crs3.jpg",
  },
  {
    src: "/gallery/crs/crs4.jpg",
    type: "image",
    title: "CSR Recognition 4",
    description: "Description for crs4.jpg",
  },
  {
    src: "/gallery/crs/crs5.jpg",
    type: "image",
    title: "CSR Recognition 5",
    description: "Description for crs5.jpg",
  },
  {
    src: "/gallery/crs/crs6.jpg",
    type: "image",
    title: "CSR Recognition 6",
    description: "Description for crs6.jpg",
  },
];

const title = "CSR Gallery";
export default function CsrRecognition() {
  return <MediaGallery mediaItems={mediaItems} title={title} />;
}
