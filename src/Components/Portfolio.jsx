import React, { useState } from 'react';
import fixitgroup from "../img/fixitgroupbd.png"
import drfixitbd from "../img/drfixitbd.png"
import koreanfixit from "../img/koreanfixit.png"
import newssite from "../img/news.png"
import newsdashboard from "../img/newsdashboard.png"
import lubricants from "../img/lubricants.jpg";
const Portfolio = () => {
  // State to track if all projects are shown
  const [showAll, setShowAll] = useState(false);

  // All project data
  const allProjects = [
{
  id: 1,
  title: "Fixit Group BD",
  description:
    "A modern business website for Fixit Group BD, showcasing industrial coating, flooring, and professional construction solutions.",
  tech: ["React", "TailwindCSS", "JavaScript"],
  liveDemo: "https://fixitgroupbd.com/",
  repo: "https://github.com/JahidWebDev",
  image: fixitgroup,
  bgGradient: "from-blue-50 to-indigo-50",
},
{
  id: 2,
  title: "Dr Fixit BD",
  description:
    "A professional website for Dr Fixit BD, showcasing services, solutions, and company information with a modern responsive interface.",
  tech: ["React", "TailwindCSS", "JavaScript"],
  liveDemo: "https://drfixitbd.org/",
  repo: "https://github.com/JahidWebDev",
  image: drfixitbd,
  bgGradient: "from-blue-50 to-cyan-50",
},
  {
  id: 3,
  title: "Korean Fixit",
  description:
    "A modern industrial coating and flooring solutions website designed to showcase services, products, and professional solutions with a clean and responsive interface.",
  tech: ["React", "TailwindCSS", "JavaScript"],
  liveDemo: "https://koreanfixit.com/",
  repo: "https://github.com/JahidWebDev",
  image: koreanfixit,
  bgGradient: "from-green-50 to-emerald-50",
},
{
  id: 4,
  title: "News Portal",
  description:
    "A modern full-stack news portal built with Next.js, featuring category-based news, breaking news, search, featured stories, and a responsive user-friendly interface.",
  tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
  liveDemo: "https://github.com/JahidWebDev/Next.js-News-Website-Project",
  repo: "https://github.com/JahidWebDev/Next.js-News-Website-Project",
  image: newssite,
  bgGradient: "from-cyan-50 to-blue-50",
},
  {
  id: 5,
  title: "News Dashboard",
  description:
    "A full-stack news management platform built with the MERN stack, featuring news publishing, editing, category management, image uploads, authentication, and an admin dashboard.",
  tech: ["MongoDB", "Express.js", "React", "Node.js"],
  liveDemo: "https://github.com/JahidWebDev/News_portal_dashboard",
  repo: "https://github.com/JahidWebDev/News_portal_dashboard",
  image: newsdashboard,
  bgGradient: "from-orange-50 to-amber-50",
},
  {
  id: 6,
  title: "Lubricants Website",
  description:
    "A modern responsive lubricants company website designed to showcase automotive and industrial lubricant products, services, and company information with a clean professional interface.",
  tech: ["React", "TailwindCSS", "JavaScript"],
  liveDemo: "https://lubricants-website.vercel.app/",
  repo: "https://github.com/JahidWebDev/Lubricants-website",
  image: lubricants,
  bgGradient: "from-rose-50 to-red-50",
},
    // Additional projects that appear when "See all" is clicked
    {
      id: 7,
      title: 'AI Chat Studio',
      description:
        'Build and deploy AI-powered chatbots with custom knowledge bases and multi-channel support.',
      tech: ['Python', 'FastAPI', 'React', 'MongoDB'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-violet-50 to-purple-50',
    },
    {
      id: 8,
      title: 'Cloud Canvas',
      description:
        'Collaborative design tool for teams with real-time editing, version control, and asset management.',
      tech: ['TypeScript', 'React', 'Node', 'AWS'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-teal-50 to-cyan-50',
    },
    {
      id: 9,
      title: 'DevMetrics',
      description:
        'Developer productivity analytics dashboard with DORA metrics, cycle time tracking, and team insights.',
      tech: ['Go', 'React', 'PostgreSQL', 'Grafana'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-amber-50 to-yellow-50',
    },
  ];

  // Display either first 6 or all projects
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-white  from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-7xl lg:mr-20 w-full">
        {/* Main Portfolio Container */}
        <div className="rounded-3xl ">
          {/* Header */}
         {/* Portfolio Header */}
<div className="mb-8">
 <h1
            className="text-5xl lg:text-7xl mt-4"
            style={{ fontFamily: "BebasNeue" }}
          >
            Portfolio
          </h1>
<div className="w-24 h-1 bg-[#c33201] rounded-full mt-5"></div>

  <p className="mt-8 font-blinkma text-gray-600 max-w-4xl leading-8">
    Browse my collection of web development projects that showcase my expertise
    in modern front-end and back-end technologies. Each project reflects my
    focus on building responsive, scalable, and user-friendly applications with
    clean design, optimized performance, and practical solutions to real-world
    challenges.
  </p>
</div>

{/* Projects Info */}
<div className="flex items-center justify-between mb-8">
  <div className="flex items-center gap-3">
    <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

    <span className="text-sm font-semibold text-slate-500 tracking-widest uppercase">
      Projects
    </span>

    <span className="h-5 w-px bg-slate-300"></span>

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
      {allProjects.length} Total
    </span>
  </div>
</div>

          {/* Projects Grid - 3 columns */}
       <div className="grid font-blinkma grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
  {displayedProjects.map((project, index) => (
    <div
      key={project.id}
      onClick={() => {
        if (project.liveDemo) {
          window.open(project.liveDemo, "_blank", "noopener,noreferrer");
        }
      }}
      className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-500 cursor-pointer ${
        !showAll && index >= 6 ? "hidden" : ""
      }`}
      style={{
        animation:
          showAll && index >= 6
            ? "fadeInUp 0.5s ease-out forwards"
            : "none",
        animationDelay: showAll ? `${(index - 6) * 0.1}s` : "0s",
      }}
    >
      {/* IMAGE */}
      <div
        className={`relative h-52 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark overlay */}
        

        {/* Hover View */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-sm font-semibold shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
            View Project ↗
          </span>
        </div>

        {/* Tech */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-lg border border-white/15 text-white text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 3 && (
            <span className="px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-lg border border-white/15 text-white text-[11px] font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 md:p-6">
        {/* Project Number */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
            Project {String(index + 1).padStart(2, "0")}
          </span>

          <span className="w-2 h-2 rounded-full bg-[#c33201] group-hover:scale-150 transition-transform duration-300" />
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-[#0b1a2f] mb-2 group-hover:text-[#c33201] transition-colors duration-300">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm leading-6 text-slate-500 line-clamp-2 mb-5">
          {project.description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-sm font-semibold text-slate-700 group-hover:text-[#c33201] transition-colors">
            Explore Project
          </span>

          <div className="flex items-center gap-2">
            {/* Live */}
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#c33201] text-white hover:bg-[#c33201] hover:text-white transition-all duration-300"
              aria-label="Live Demo"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            {/* Github */}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center  text-white bg-black hover:text-white transition-all duration-300"
              aria-label="Repository"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

          {/* See More Button - Mobile & Tablet */}
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-md shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <span>{showAll ? 'Show less' : 'See all projects'}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`group-hover:translate-x-0.5 transition-all duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-slate-400 mt-6 tracking-wide">
            <span>
              {showAll
                ? `Showing all ${allProjects.length} projects`
                : `Showing 6 of ${allProjects.length} projects · click "See all" to view more`}
            </span>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;