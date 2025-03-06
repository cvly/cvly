import Image from "next/image";
const FeaturedWork = ({ profile }: { profile: any }) => {
  if (!Array.isArray(profile.featuredProjects) || profile.featuredProjects.length === 0) {
    return (
      <div className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600 text-xl">No featured works available.</p>
      </div>
    );
  }

  return (
    <div id="featured-work" className="section relative flex flex-col items-start md:px-5">
      <p className="text-[#8E8E93] text-sm mb-6">Featured works</p>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col gap-6">
          {profile.featuredProjects.map((project: any, index: number) => (
            <div
              key={index}
              className="project-card flex flex-col bg-white rounded-lg"
            >
              <h3 className="text-[#676769] text-sm mb-4">{project.name}</h3>

              <div className="relative w-full">
                <div className="flex overflow-x-auto hide-scrollbar space-x-4">
                  {project.details.map((detail: any, i: number) => (
                    <div
                      key={i}
                      className={`shrink-0 ${
                        project.details.length > 1 ? "w-[80%]" : "w-full"
                      }`}
                    >
                      {/* If there is a link, wrap in an embed-style card */}
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block border rounded-md shadow-md bg-gray-100 hover:shadow-lg transition"
                        >
                          {detail.image && (
                           <Image
                           src={detail.image}
                           alt={`Project ${index + 1} Image ${i + 1}`}
                           width={500}  // ✅ Replace with a valid number
                           height={250}
                           className="w-full md:h-[250px] md:object-cover rounded-md border-2"
                         />
                         
                          )}
                          <div className="px-4 pt-2 pb-4">
                          <p className="text-gray-700 text-sm mt-2">{detail.description}</p>
                          <p className="text-gray-500 text-xs mt-1">{detail.subDescription}</p></div>
                        </a>
                      ) : (
                        <>
                          {detail.image && (
                            <Image
                              src={detail.image}
                              alt={`Project ${index + 1} Image ${i + 1}`}
                              width={500}
                              height={250}
                              className="w-full md:h-[250px] md:object-cover rounded-md border"
                            />
                          )}
                          <p className="text-gray-700 text-xs md:text-sm mt-2">{detail.description}</p>
                          {detail.subDescription && (
                            <p className="text-gray-500 text-xs mt-1">{detail.subDescription}</p>
                          )}
                        </>
                      )}

                     {/* Skills */}
{detail.skills?.length > 0 && (
  <div className="mt-2 flex flex-wrap">
    {detail.skills.map((skill: string, j: number) => (
      <span
        key={j}
        className="bg-[#F1F1F1] text-[#8E8E93] text-[6px] md:text-xs px-2 py-1 rounded-full mr-2 mt-2"
      >
        {skill}
      </span>
    ))}
  </div>
)}

                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedWork;
