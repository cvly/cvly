import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface YouTubeVideo {
  title: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
}

const Youtube: FC<{ profile: any }> = ({ profile }) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div id="youtube" className="section flex items-center justify-center text-lg font-medium text-gray-600">
        Loading YouTube videos...
      </div>
    );
  }

  if (error || !videos || videos.length === 0) {
    return (
      <div id="youtube" className="section flex items-center justify-center text-lg font-medium text-gray-600">
        {error || 'No YouTube videos available.'}
      </div>
    );
  }

  return (
    <div id="youtube" className="section w-full flex flex-col gap-6 md:pr-5 md:py-5 pb-6 md:pb-12 mb-0">
      {/* Title */}
      <div className="w-full flex justify-between items-center">
        <h2 className="text-gray-500 text-sm">YouTube</h2>
        <a 
          href="https://www.youtube.com/channel/UC0m81bQuthaQZmFbXEY9QSw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          view all
        </a>
      </div>

      {/* Videos Container */}
      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory pr-4 md:px-2">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex-shrink-0 w-[65vw] md:w-[240px] snap-center first:ml-0 last:mr-4"
            >
              <div className="aspect-video relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{video.publishedAt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Youtube;