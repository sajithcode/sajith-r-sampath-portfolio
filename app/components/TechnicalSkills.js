"use client";

import React from "react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      icon: "⌨️",
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "SQL", "PHP", "HCL"],
    },
    {
      icon: "⚙️",
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Git",
        "VIM",
        "NeoVim",
        "Kubernetes",
        "Agile",
        "CI/CD with Jenkins",
        "Terraform",
      ],
    },
    {
      icon: "🌐",
      title: "JavaScript Libraries & Frameworks",
      skills: [
        "Node.js",
        "React.js",
        "Bun.js",
        "Deno",
        "Vanilla JS",
        "Next.js",
      ],
    },
    {
      icon: "🗄️",
      title: "Web Frameworks",
      skills: ["Express.js", "Fastify"],
    },
    {
      icon: "☁️",
      title: "Backend as a Service",
      skills: ["Firebase", "Appwrite"],
    },
    {
      icon: "🧪",
      title: "Testing",
      skills: ["Jest"],
    },
  ];

  return (
    <section className="technical-skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Comprehensive expertise across modern development stack with focus
            on scalable web applications and DevOps practices.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
