// app/[profileId]/components/ProfileCard.tsx
import Image from "next/image";


interface ProfileCardProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    skills: string[];
    photo: string; // New property for photo
    location: string;
    gender: string;
    verified: boolean;
    getInTouch: string; // Email
    resume: string; // Resume PDF URL
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="max-w-2xl md:p-2 md:p-1 text-center relative mt-8 md:mt-12">
      {/* Profile Photo */}
      <div className="flex items-center relative">
        <div className="flex justify-center mr-4 md:mr-6 relative">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={128}
            height={128}
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-300"
          />
        </div>
  
        {/* Name, Title, and Verified Badge */}
        <div className="text-left">
          <div className="flex items-center space-x-2">
            <h1 className="text-m md:text-2xl font-bold text-black-600">{profile.name}</h1>
            {/* Verified Badge (Shown only if verified) */}
            {profile.verified && (
              <Image
                src="/images/Verified_badge.svg"
                alt="Verified Badge"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            )}
          </div>
          <p className="text-sm md:text-lg text-gray-600 mt-0">{profile.title}</p>
          <div className="flex items-center space-x-2 mt-1">
            <Image src="/images/location.svg" alt="location" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-lg text-gray-400 m-0 leading-5">
              {profile.location} • <span> {profile.gender}</span>
            </span>
          </div>
        </div>
      </div>
  
      {/* Bio */}
      <p className="text-gray-500 mt-3 md:mt-4 text-sm md:text-base text-left">{profile.bio}</p>
  
      {/* Buttons */}
      <div className="flex items-center space-x-1 md:space-x-2 mt-5">
        {/* Get in Touch Button */}
        <a 
          href={`mailto:${profile.getInTouch}`}
          className="bg-[#262626] text-white py-2 px-3 md:px-4 w-[60%] md:w-[70%] rounded-lg text-sm md:text-base text-center"
        >
          Get in Touch
        </a>
  
        {/* Resume Download Button */}
        <a 
          href={profile.resume} 
          download 
          className="bg-gray-200 text-black py-2 px-3 md:px-4 w-[32%] md:w-[25%] rounded-lg text-sm md:text-base text-center"
        >
          Resume
        </a>
  
        {/* Menu Button */}
        <button className="bg-gray-200 text-black py-2 px-1 md:px-2 w-[8%] md:w-[5%] rounded-lg text-sm md:text-base">
          ⫶
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;