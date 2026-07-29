import React, { useState } from 'react';

const Portfolio = () => {
  // State to track if all projects are shown
  const [showAll, setShowAll] = useState(false);

  // All project data
  const allProjects = [
    {
      id: 1,
      title: 'Makers Tracker',
      description:
        "A project goal tracking tool for professionals. It let's you create project, assign goals and generate analytics to track progress.",
      tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'MySQL'],
      liveDemo: 'https://jahidhossen-portfolio.vercel.app/',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
      id: 2,
      title: 'Pricing Bees',
      description:
        'A no-code pricing page builder. Build professional-looking pricing pages, customize looks, and get detailed analytics to optimize your pricing strategy.',
      tech: ['TypeScript', 'Next.js', 'Shadcn/ui', 'Convex'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      id: 3,
      title: 'Indie Hustles',
      description:
        'A listing site for Indie hackers to promote their products.',
      tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Airtable'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      id: 4,
      title: 'FlowForge',
      description:
        'Visual workflow builder for automation. Design, test, and deploy with drag-and-drop.',
      tech: ['React', 'Node', 'Postgres'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-cyan-50 to-blue-50',
    },
    {
      id: 5,
      title: 'TaskPulse',
      description:
        'Real-time task monitoring with alerting and team dashboards.',
      tech: ['Python', 'Django', 'Celery', 'Redis'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      id: 6,
      title: 'LaunchPad',
      description:
        'Curated launch platform for indie makers. Get feedback, upvotes, and early users.',
      tech: ['Vue', 'Nuxt', 'Tailwind', 'Supabase'],
      liveDemo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center&auto=format',
      bgGradient: 'from-rose-50 to-red-50',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-2xl overflow-hidden shadow-lg ${
                  !showAll && index >= 6 ? 'hidden' : ''
                }`}
                style={{
                  animation: showAll && index >= 6
                    ? 'fadeInUp 0.5s ease-out forwards'
                    : 'none',
                  animationDelay: showAll ? `${(index - 6) * 0.1}s` : '0s',
                }}
              >
                {/* Image Section */}
                <div className={`relative h-44 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Tech chips overlay on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-black/40 backdrop-blur-md text-white text-[0.6rem] font-medium px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-black/40 backdrop-blur-md text-white text-[0.6rem] font-medium px-2.5 py-1 rounded-full border border-white/10">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-bold text-[1.1rem] tracking-[-0.01em] text-[#0b1a2f] mb-1.5 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#3c4a5e] text-[0.85rem] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <a
                      href={project.liveDemo}
                      className="text-[#1f2a3a] font-semibold text-[0.85rem] no-underline border-b-2 border-transparent hover:border-indigo-500 hover:text-indigo-600 transition-all duration-150 flex items-center gap-1"
                    >
                      Live Demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                    <span className="text-[#bac8dc] font-light">·</span>
                    <a
                      href={project.repo}
                      className="text-[#5a6c82] font-medium text-[0.85rem] no-underline border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-300 transition-all duration-150 flex items-center gap-1"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#5a6c82] group-hover:text-indigo-500 transition-colors">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Repository
                    </a>
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