import { FC } from "react";

const Education: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.education || profile.education.length === 0) {
    return (
      <div id="education" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No education details available.</p>
      </div>
    );
  }

  return (
    <div id="education" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full md:gap-20 mb-6">
      {/* Title */}
      <div>
      <p className="text-[#676769] text-sm pt-5">Education</p>
      </div>
      {/* Education List */}
      <div className="flex flex-col w-full gap-6 pt-5">
        {profile.education.map((edu: any, index: number) => (
          <div
            key={index}
            className="bg-white md:px-1 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4 w-full"
          >
            {/* Education Info */}
            <div>
              <h3 className="text-sm text-gray-900">{edu.degree} in {edu.branch}</h3>
              <p className="text-gray-400 text-sm">{edu.name} - {edu.place}</p>
              <p className="text-gray-500 text-sm">
                {edu.start_date} - {edu.present ? "Present" : edu.end_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
