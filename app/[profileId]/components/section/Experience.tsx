import { FC } from "react";
import Image from "next/image";

const Experience: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.experience || profile.experience.length === 0) {
    return (
      <div id="experience" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No work experience available.</p>
      </div>
    );
  }

  return (
    <div id="experience" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full md:gap-20 mb-6">
      {/* Title */}
      <div>
      <p className="text-[#676769] text-sm md:mb-6 pt-5">Experience</p>
      </div>
      {/* Experience List */}
      <div className="flex flex-col gap-1 w-full">
        {profile.experience.map((job: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-row items-start md:items-center gap-4 pt-5"
          >
            {/* Company Logo (if available) */}
            {job.details[0]?.image && (
              <Image
                src={job.details[0].image}
                alt={`${job.company_name} logo`}
                width={40}
                height={40}
                className="object-cover rounded-30"
              />
            )}

            {/* Job Info */}
            <div>
              <h3 className="text-sm font-m text-gray-900">{job.name}, <span className="underline">{job.company_name}</span></h3>
              <p className="text-gray-400 text-sm">{job.details[0]?.place} - {job.details[0]?.type}</p>
              <p className="text-gray-500 text-sm">
                {job.details[0]?.joining_date} - {job.details[0]?.present ? "Present" : job.details[0]?.end_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
