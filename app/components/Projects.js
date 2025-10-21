"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
      ],
      codeUrl: "https://github.com/sajithcode/ecommerce",
      demoUrl: "https://ecommerce-demo.com",
    },
    {
      title: "DevOps Automation Suite",
      description:
        "Comprehensive CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 70% and improved system reliability.",
      image: "/projects/devops.jpg",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
      codeUrl: "https://github.com/sajithcode/devops-suite",
      demoUrl: "https://devops-demo.com",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
      image: "/projects/analytics.jpg",
      technologies: [
        "React",
        "Firebase",
        "Chart.js",
        "WebSocket",
        "TypeScript",
      ],
      codeUrl: "https://github.com/sajithcode/analytics",
      demoUrl: "https://analytics-demo.com",
    },
  ];

  return (
    <section className="projects-section px-4 md:px-6 mx-auto max-w-7xl">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of projects that demonstrate my expertise in full-stack
            development and modern DevOps practices.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-button-code"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-button-demo"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
