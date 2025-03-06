import { FC } from "react";

const Research: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.research || profile.research.length === 0) {
    return (
      <div id="research" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No research publications available.</p>
      </div>
    );
  }

  return (
    <div id="research" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full md:gap-20">
      {/* Title */}
      <div>
        <p className="text-[#676769] text-sm md:mb-6 pt-5">Research</p>
      </div>
      
      {/* Research List */}
      <div className="flex flex-col gap-4 w-full pt-5">
        {profile.research.map((paper: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col gap-1 pb-4"
          >
            <h3 className="text-sm font-medium text-[#262626]">{paper.name}</h3>
            <p className="text-[#8A8A8E] text-sm">
              {paper.organization} • {paper.date} | {paper.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
