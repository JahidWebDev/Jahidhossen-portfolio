import React from "react";

const Pages = () => {
  return (
    <div className="w-full min-h-[200vh] bg-slate-950 text-white px-6 pt-32">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Jahid Hossen
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-20">
          Frontend Developer crafting modern, clean and interactive web
          experiences.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-white/70 leading-8">
              I build sleek, responsive and performance-focused web interfaces
              using React, Tailwind CSS and modern UI animation.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <p className="text-white/70 leading-8">
              Portfolio websites, dashboards, landing pages and clean user
              experiences with a premium frontend feel.
            </p>
          </div>
        </div>

        <div className="mt-24 space-y-10">
          <div className="h-[500px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/40">
            Section 1
          </div>

          <div className="h-[500px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/40">
            Section 2
          </div>

          <div className="h-[500px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/40">
            Section 3
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pages;