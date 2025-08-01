import React, { useState } from "react";
import { cn } from "../lib/utils";

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
    category: "tools",
  },
  {
    name: "Figma",
    level: 80,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [acticeCategory, setActiveCatergory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => acticeCategory === "all" || skill.category === acticeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                acticeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCatergory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skills, key) => (
            <div
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              key={key}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skills.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skills.level + "%" }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skills.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
