import { useState } from "react";

const MediaGallery = ({ title, mediaItems }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="px-6 md:px-20 py-12 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedMedia(item)}
            className="cursor-pointer border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="w-full h-64 bg-black flex items-center justify-center">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <video
                  src={item.src}
                  className="max-h-full max-w-full object-contain"
                  muted
                  autoPlay
                  loop
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-3 left-3 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-black text-xl z-10"
            >
              &times;
            </button>
            <div className="w-full bg-black flex items-center justify-center max-h-[80vh] overflow-hidden">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-h-[80vh] w-auto object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  className="max-h-[80vh] w-auto object-contain"
                />
              )}
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-bold mb-2">{selectedMedia.title}</h2>
              <p className="text-sm text-gray-600">
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
