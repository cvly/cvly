import { FC } from "react";
import Image from "next/image";

const Recommendations: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.recommendations || profile.recommendations.length === 0) {
    return (
      <div id="recommendations" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No recommendations available.</p>
      </div>
    );
  }

  return (
    <div id="recommendations" className="section flex flex-col md:flex-row items-start md:px-5 w-full mb-6">
      {/* Title */}
      <h2 className="text-[#676769] text-sm mb-6 pt-5">What people say</h2>

      {/* Recommendations List */}
      <div className="flex flex-col w-full max-w-lg">
        {profile.recommendations.map((rec: any, index: number) => (
          <div key={index} className="bg-white rounded-lg md:p-6 pt-6 flex flex-col items-start text-left">
            {/* Recommendation Text */}
            <p className="text-gray-700 italic text-sm mb-4">&quot; {rec.say}&ldquo;</p>

            {/* Profile Section */}
            <div className="flex items-center gap-3">
              {/* Profile Image */}
              {rec.profile && (
                <Image width={60} height={60}
                  src={rec.profile}
                  alt={`${rec.name}'s profile`}
                  className="w-12 h-12 object-cover rounded-full"
                />
              )}

              {/* Name & Position */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{rec.name}</h3>
                <p className="text-gray-500 text-xs">{rec.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
