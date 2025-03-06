// app/[profileId]/page.tsx
"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import ProfileCard from "./components/ProfileCard";
import StickyMenu from "./components/Menu";

export const runtime = 'edge';

const profiles: Record<string, any> = {
  sushma: {
    name: "Sushma Koteswari Marri",
    title: "Frontend Developer",
    bio: "Junior Software Developer skilled in React, Next.js, Java, and PostgreSQL. Experienced in enhancing user engagement, optimizing APIs, and driving efficiency through automation. Passionate about building scalable, user-friendly applications.",
    photo: "/images/sushma.svg", // Add photo URL here
    location:"Hyderabad",
    gender:"She/Her",
    verified:true,
    featuredProjects: [  // Changed to an array of projects
      {
        name: "Internship Assignments",
        details: [
          {
            image: "/images/p11.svg",
            description: "Drone in a box (DIAB) solution for a Product Design Challenge by Flytbase",
            skills: ["Design Challenge", "Case Study", "Video Explanation"],
          },
          {
            image: "/images/p12.svg",
            description: "DigiVote - Seamless and Secure Online Voting System",
            skills: ["Design Challenge", "Case Study", "Video Explanation"],
          },
        ],
      },
      {
        name: "Landing Page design",
        details: [
          {
            image: "/images/p2.svg",
            description: "Landing Page Design for Blackbucks Group",
            skills: [ "Case Study", "Landing page","Internship"],
          },
          {
            image: "/images/p22.svg",
            description: "Landing Page Design for a Cloud-Based Platform: Cloudily",
            skills: [ "Case Study", "Landing page"],
          },
        ],
      },
      {
        name: "Side Project",
        details: [
          {
            image: "/images/p3.svg",
            description: "Cvly.me - The website you are currently on...",
            subDescription:" You're currently on Cvly.me, a platform designed for students, developers, designers, freelancers, and orgs to showcase their work.",
            link: "https://Cvly.me/Shaheer"
          },
        ],
      },
    ], 
  },
  shaheer: {
    metadata:{
      title: "Md Shaheer Ahmed | Portfolio made in Cvly",
      description:"Shaheer | Product Designer Specializing in SaaS & Fintech UI/UX | Human-Computer Interaction (HCI) Solutions | Hyderabad-Based Innovator | Cvly",
    },
    name: "Md Shaheer Ahmed",
    title: "Product Designer",
    bio: "My work aims to bridge the gap between technology and human intuition, ensuring seamless and intuitive user experiences.",
    photo: "/images/shaheer.svg", // Add photo URL here
    location:"Hyderabad",
    gender:"He/Him",
    verified:true,
    getInTouch:"shaheerhasidea@gmail.com",
    resume:"/images/Md_Shaheer_Ahmed_Resume.pdf",
    featuredProjects: [  // Changed to an array of projects
      {
        name: "Internship Assignments",
        details: [
          {
            image: "/images/p11.svg",
            description: "Drone in a box (DIAB) solution for a Product Design Challenge by Flytbase",
            skills: ["Design Challenge", "Case Study", "Video Explanation"],
          },
          {
            image: "/images/p12.svg",
            description: "DigiVote - Seamless and Secure Online Voting System",
            skills: ["Design Challenge", "Case Study", "Video Explanation"],
          },
        ],
      },
      {
        name: "Landing Page design",
        details: [
          {
            image: "/images/p2.svg",
            description: "Landing Page Design for Blackbucks Group",
            skills: [ "Case Study", "Landing page","Internship"],
          },
          {
            image: "/images/p22.svg",
            description: "Landing Page Design for a Cloud-Based Platform: Cloudily",
            skills: [ "Case Study", "Landing page"],
          },
        ],
      },
      {
        name: "Side Project",
        details: [
          {
            image: "/images/p3.svg",
            description: "Cvly.me - The website you are currently on...",
            subDescription:" You're currently on Cvly.me, a platform designed for students, developers, designers, freelancers, and orgs to showcase their work.",
            link: "https://Cvly.me/Shaheer"
          },
        ],
      },
    ], 
    experience: [
      {
        name: "Product Designer Intern",
        company_name: "Setu",
        details: [
          {
            image: "/images/setu-icon.svg",
            joining_date: "2023-06-01",
            present: true, // If still working, set true
            end_date: "", // Leave empty if present is true
            place: "Bangalore, India",
            type: "remote",
          },
        ],
      },
      {
        name: "Product Designer Intern",
        company_name: "Blackbucks",
        details: [
          {
            image: "/images/bb-icon.svg",
            joining_date: "2024-09-15",
            present: false,
            end_date: "2025-12-30",
            place: "Hyderabad, India",
            type: "onsite",
          },
        ],
      },
    ],
    education:[
      {
        name:"Christu Jyothi Institute of Technology and Science",
        degree:"Bachelors of Technology",
        branch:"Computer Science & Engineering",
        place:"Jangaon, Telangana",
        start_date:"Sep 2021",
        present:false,
        end_date:"Aug 2025",
      },
      {
        name:"ABV Junior College",
        degree:"Intermediate",
        branch:"MPC",
        place:"Jangaon, Telangana",
        start_date:"Apr 2019",
        present:false,
        end_date:"Mar 2021",
      }
    ],
    research:[
      {
        name:"Designing a Safe Ecosystem to Prevent Deepfake-Driven Misinformation on Elections",
        organization:"Digital Society",
        date:"August 2024",
        type:"DISO"
      },
      {
        name:"Chess Games as a Method for File Encryption and Storage",
        organization:"Research Square",
        date:"16 Sept 2024",
        type:"Preprint"
      },
      {
        name:"From Clicks to Conversations: The Transition to Chat Interfaces",
        organization:"SSRN",
        date:"29 Feb 2024",
        type:"Preprint"
      }
    ],
    certifications:[
      {
        name:"UX Foundations: Style Guides and Design Systems",
        organization:"LinkedIn Learning",
        date:"Sep 2024"
      },
      {
        name:"Design User Experiences with Figma",
        organization:"LinkedIn Learning",
        date:"Oct 2024"
      },
      {
        name:"Cloud computing certification",
        organization:"Swayam NPTEL",
        date:"Dec 2024"
      }
    ], 
    skills:[
      { type: "Coding Skills", details: ["C", "C++", "Java", "Python"] },
      { type: "Design Skills", details: ["Design Thinking", "UX Design", "User Research", "UI Design","Wireframing","Prototyping","Information Architecture"] },
      { type: "Tools", details: ["Figma", "Jira", "Miro", "Framer", "Git", "SQL"] }
    ],
    extraCuricularActivities:[
      {
        name:"Lead of Design Club",
        organization:"CJITS",
        date:"Mar 2024",
        end_date:"Sep 2024"
      },
      {
        name:"National Youth Festival 2024 Participant",
        organization:"NYKS",
        date:"Jan 2024"
      },
      {
        name:"District Level Declamation Contest 2023 Winner",
        organization:"NYKS",
        date:"Dec 2023"
      }
    ],
    recommendations:[
      {
        name:"Raghu Ram Raavi",
        position:"APM, Phenom",
        say: "Shaheer is a very talented designer. Love his work so much! I like his design and communication,definitely keen to work with him again.",
        profile:"/images/men1.svg"
      },
      {
        name:"Sushma",
        position:"SDE,Blackbucks",
        say:"Shaheer understands our brand and creates stunning experiences. Collaborating with him has been a game-changer. If you need a designer who exceeds expectations, Shaheer is the one!",
        profile:"/images/women1.svg"
      },
      {
        name:"Tejasree",
        position:"Frontend Dev, Blackbucks",
        say:"Working with Shaheer was a pleasure. His punctuality, excellent taste of style, with the clean, precise layouts truly impressed me.",
        profile:"/images/women2.svg"
      }

    ],
    gallery:[
    "/images/gallery1.svg",
    "/images/gallery2.svg",
    "/images/gallery3.svg",
    "/images/gallery4.svg",
    "/images/gallery5.svg",
    "/images/gallery6.svg",
    "/images/gallery7.svg",
    ],
    more: [
      {
        main: "Hey 👋 Thanks for scrolling till here.",
        passion: "I’m passionate about crafting cool SaaS experiences 🚀 Currently building Cvly.me, a platform to help people showcase their work effortlessly ✨",
        invitation: "Let's connect if you're curious about my work, want to geek out about design trends, or just fancy a virtual coffee! Cheers 😄"
      }
    ],
    contact:[
      {
        email:"shaheerhasidea@gmail.com",
        linkedIn:"https://www.linkedin.com/in/boringcuriosity/",
        instagram:"https://www.instagram.com/boringcuriosity/",
        twitter:"https://x.com/boringcuriosity",
        github:"https://github.com/boringcuriosity",
        dribble:"https://dribbble.com/boringcuriosity",
        behance:"",
      }
    ]
  },
};

export default function Profile() {
  const { profileId } = useParams();
  const profileIdString = Array.isArray(profileId) ? profileId[0] : profileId;
  const profile = profiles[profileIdString?.toLowerCase() as string];

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold text-red-500">Profile not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4 relative">
    <div className="max-w-2xl w-full justify-center">
      <ProfileCard profile={profile} />
      <StickyMenu profile={profile} />
    </div>
  
    {/* Made with Cvly Tag */}
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white rounded-lg shadow-md p-2">
    <Image
       src="Cvly.svg"  // Replace with the path to your Cvly icon
        alt="Cvly Icon"
        width={20} height={20}
        
      />
      <span className="text-sm text-gray-900">Made in <span className="font-semibold">Cvly.me</span></span>
    </div>
  </div>


  );
}
