import React from "react";

const skills = [
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    level: 70,
    category: "frontend",
  },
  {
    name: "Node.js",
    level: 70,
    category: "backend",
  },
  {
    name: "Express",
    level: 70,
    category: "backend",
  },
  {
    name: "MongoDB",
    level: 65,
    category: "backend",
  },
  {
    name: "Git/Github",
    level: 80,
    category: "Tool",
  },
  {
    name: "Figma",
    level: 80,
    category: "Tool",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skills, key) => (
            <div
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              key={key}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skills.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
