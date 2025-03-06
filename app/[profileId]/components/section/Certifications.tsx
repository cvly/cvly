import { FC } from "react";

const Certifications: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.certifications || profile.certifications.length === 0) {
    return (
      <div id="certifications" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No certifications available.</p>
      </div>
    );
  }

  return (
    <div id="certifications" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full md:gap-14">
      {/* Title */}
      <div>
        <p className="text-[#676769] text-sm md:mb-6 pt-5">Certifications</p>
      </div>
      {/* Certifications List */}
      <div className="flex flex-col gap-1 w-full  pt-5">
        {profile.certifications.map((cert: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4 pt-1 pb-2"
          >
            {/* Certification Info */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.organization}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
