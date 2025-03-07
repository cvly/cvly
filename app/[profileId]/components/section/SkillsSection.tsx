import { FC } from "react";

const SkillsSection: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.skills || profile.skills.length === 0) {
    return (
      <div id="skills" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No skills available.</p>
      </div>
    );
  }

  return (
    <div id="skills" className="section relative flex flex-col md:pt-10 md:px-5 w-full mb-6">
      {/* Title */}
      <p className="text-[#676769] text-sm md:mb-2 pb-5">Expertise</p>
      {/* Skills List */}
      <div className="flex flex-col gap-4">
        {profile.skills.map((skill: any, index: number) => (
          <div key={index} className="flex flex-col md:flex-row pb-3 md:items-start md:gap-1">
            {/* Skill Category */}
            <h3 className="text-sm font-medium text-gray-400 md:w-1/4">{skill.type}</h3>
            {/* Skill Details */}
            <p className="text-gray-900 text-sm md:w-full px-3">{skill.details.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
