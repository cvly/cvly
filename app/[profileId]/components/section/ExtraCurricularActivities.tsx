import { FC } from "react";

const ExtraCuricularActivities: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.extraCuricularActivities || profile.extraCuricularActivities.length === 0) {
    return (
      <div id="extra-activities" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No extracurricular activities available.</p>
      </div>
    );
  }

  return (
    <div id="extra-activities" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full md:gap-0">
      {/* Title */}
      <div>
        <p className="text-[#676769] text-sm md:mb-6 md:pt-5">Extracurricular Activities</p>
      </div>

      {/* Activities List */}
      <div className="flex flex-col gap-1 w-full pt-5">
        {profile.extraCuricularActivities.map((activity: any, index: number) => (
          <div key={index} className="bg-white rounded-lg pb-2 md:px-4">
            <h3 className="text-sm text-gray-900">{activity.name}</h3>
            <p className="text-gray-400 text-xs">{activity.organization} •  {activity.date} - {activity.end_date ? activity.end_date : "Present"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCuricularActivities;
