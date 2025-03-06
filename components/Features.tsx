import {  PenTool, Sparkles, Boxes } from "lucide-react";

const features = [
  {
    icon: <PenTool className="w-5 h-5" />,
    text: "Professionally designed templates"
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    text: "AI powered intelligent optimisation"
  },
  {
    icon: <Boxes className="w-5 h-5" />,
    text: "Seamlessly integrate with other apps"
  }
];

export default function Features() {
  return (
    <div className="py-12">
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center md:gap-3 gap-1 text-muted-foreground pl-8 md:pl-0"
          >
            <span className="text-primary">{feature.icon}</span>
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
