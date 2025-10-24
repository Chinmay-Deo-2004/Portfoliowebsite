import { Card } from "./ui/card";
import cstLogo from "figma:asset/0fad8d7a6cd39ac5b76bcdf0179f37229c87e5d7.png";
import gnuRadioLogo from "figma:asset/20654d93e11bdc37fd7daf9b0258ca42d823cde2.png";

const skills = [
  {
    name: "MATLAB",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
  },
  {
    name: "C",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  },
  {
    name: "C++",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "CST Studio Suite",
    icon: cstLogo,
  },
  {
    name: "KiCad",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg",
  },
  {
    name: "GNU Radio",
    icon: gnuRadioLogo,
  },
  {
    name: "Git",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Unix",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] p-6 flex flex-col items-center justify-center aspect-square group"
            >
              <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  onError={(e) => {
                    // Fallback to a colored square if image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center"><span class="text-cyan-400 text-xl font-bold">${skill.name[0]}</span></div>`;
                    }
                  }}
                />
              </div>
              <span className="text-gray-400 text-xs text-center group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
