import { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  photo: string;
  location: string;
  gender: string;
  featuredProjects: boolean;
  projects: {
    name: string;
    details: {
      image: string;
      description: string;
      skills: string[];
      link?: string;
    }[];
  }[];
  experience: {
    name: string;
    company_name: string;
    details: {
      image?: string;
      joining_date: string;
      present: boolean;
      end_date?: string;
      place: string;
      type: "onsite" | "remote" | "hybrid";
    }[];
  }[];
  education: {
    name: string;
    degree: string;
    branch: string;
    place: string;
    start_date: string;
    present: boolean;
    end_date: string;
  }[];
  certifications: {
    name: string;
    organization: string;
    date: string;
  }[]; // ✅ FIXED: Changed from object to array
}


interface StickyMenuProps {
  profile: Profile;
}

const sections = [
  "featured work",
  "experience",
  "education",
  "research",
  "certifications",
  "skills",
  "extraCurricular",
  "recommendations",
  "gallery",
  "more",
  "contact",
];

type SectionComponent = ComponentType<{ profile: Profile }>;

const sectionComponents: Record<string, SectionComponent> = {
  "featured work": dynamic(() => import("./section/FeaturedWork"), { ssr: false }),
  experience: dynamic(() => import("./section/Experience"), { ssr: false }),
  education: dynamic(() => import("./section/Education"), { ssr: false }),
  research: dynamic(() => import("./section/Research"), { ssr: false }),
  certifications: dynamic(() => import("./section/Certifications"), { ssr: false }),
  skills: dynamic(() => import("./section/SkillsSection"), { ssr: false }),
  extraCurricular: dynamic(() => import("./section/ExtraCurricularActivities"), { ssr: false }),
  recommendations: dynamic(() => import("./section/Recommendations"), { ssr: false }),
  gallery: dynamic(() => import("./section/Gallery"), { ssr: false }),
  more: dynamic(() => import("./section/More"), { ssr: false }),
  contact: dynamic(() => import("./section/Contact"), { ssr: false }),
};

const StickyMenu: React.FC<StickyMenuProps> = ({ profile }) => {
  const [activeSection, setActiveSection] = useState("featured work");
  const [underlineStyle, setUnderlineStyle] = useState({ left: "0px", width: "0px" });
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const updateUnderline = useCallback(() => {
    const activeItem = document.getElementById(`${activeSection}-menu`);
    if (activeItem) {
      setUnderlineStyle({
        left: `${activeItem.offsetLeft}px`,
        width: `${activeItem.offsetWidth}px`,
      });

      if (activeSection !== "featured work") {
        activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const sectionsList = document.querySelectorAll(".section");

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      sectionsList.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });

      if (menuRef.current) {
        if (scrollTop > lastScrollTop) {
          menuRef.current.scrollBy({ left: 40, behavior: "smooth" });
        } else {
          menuRef.current.scrollBy({ left: -40, behavior: "smooth" });
        }
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    updateUnderline();

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection, lastScrollTop, updateUnderline]);

  useEffect(() => {
    updateUnderline();
  }, [activeSection, updateUnderline]);

  const handleMenuClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };
  return (
    <div>
      {/* Sticky Menu */}
      <div className="sticky top-0 bg-white z-10">
        <div ref={menuRef} className="overflow-x-auto whitespace-nowrap custom-scrollbar flex">
          <ul className="relative flex gap-6 w-max md:w-full md:justify-between md:px-4 md:px-0 pb-1 pt-5 text-sm md:text-base">
            {sections.map((id) => (
              <li
                key={id}
                id={`${id}-menu`}
                className={`menu-item relative cursor-pointer pb-2 transition-colors duration-300 
                  ${activeSection === id ? "text-gray-800 font-semibold" : "text-gray-500"}`}
                onClick={() => handleMenuClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </li>
            ))}
            <span
              className="absolute bottom-0 h-[2px] bg-gray-800 transition-all duration-500 ease-in-out"
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
          </ul>
        </div>
      </div>

      <hr />

      {/* Sections */}
      {sections.map((id) => {
        const SectionComponent = sectionComponents[id];
        return (
          <div key={id} id={id} className="section pt-10 h-auto flex items-center justify-center">
            {SectionComponent ? <SectionComponent profile={profile} /> : id.charAt(0).toUpperCase() + id.slice(1)}
          </div>
        );
      })}
    </div>
  );
};

StickyMenu.displayName = "StickyMenu";


export default StickyMenu;
