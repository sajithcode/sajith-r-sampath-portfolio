"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Lead full-stack development projects using React, Node.js, and TypeScript. Implemented CI/CD pipelines with Jenkins and managed containerized applications with Docker and Kubernetes.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Jenkins",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with DevOps team to implement automated deployment processes and infrastructure as code with Terraform.",
      technologies: [
        "JavaScript",
        "Express.js",
        "Firebase",
        "Terraform",
        "Git",
      ],
    },
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">
            Over 5 years of experience building scalable web applications and
            leading development teams in fast-paced environments.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <div className="experience-title-wrapper">
                  <Briefcase className="experience-icon" size={16} />
                  <h3 className="experience-job-title">{exp.title}</h3>
                </div>
                <div className="experience-meta">
                  <div className="experience-period">
                    <Calendar size={12} className="meta-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-location">
                    <MapPin size={12} className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-company">{exp.company}</div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
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

export default Experience;
