import { FC } from "react";

const More: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.more || profile.more.length === 0) {
    return (
      <div id="more" className="section h-screen flex items-center justify-center text-2xl font-bold">
        <p className="text-gray-600">No additional info available.</p>
      </div>
    );
  }

  return (
    <div id="more" className="section flex flex-col gap-10 md:flex-row md:gap-24 pt-5 md:px-5 text-start">
      <p className="text-sm text-gray-400">More</p>
      {profile.more.map((info: any, index: number) => (
        <div key={index} className="max-w-2xl mx-auto">
          <p className="text-sm font-medium text-gray-900 pb-3">{info.main}</p>
          <p className="text-sm text-gray-600 mt-2 pb-4 md:pb-1">{info.passion}</p>
          <p className="text-sm text-gray-500 mt-2 italic">{info.invitation}</p>
        </div>
      ))}
    </div>
  );
};

export default More;
