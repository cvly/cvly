import { FC } from "react";
import Image from "next/image";

const Gallery: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.gallery || profile.gallery.length === 0) {
    return (
      <div id="gallery" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No images available.</p>
      </div>
    );
  }

  return (
    <div id="gallery" className="section w-full md:px-5 mb-6">
      {/* Title */}
      <h2 className="text-[#676769] text-sm mb-4">Gallery</h2>

      {/* Scrollable Image Container */}
      <div className="flex md:gap-4 gap-2 overflow-x-auto custom-scrollbar">
        {profile.gallery.map((src: string, index: number) => (
          <Image width={240}
          height={60}
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="md:w-[22%] shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
