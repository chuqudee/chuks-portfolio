import React from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="flex h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-300 dark:selection:bg-zinc-700">
      
      {/* Left Navigation Pane (Sidebar) */}
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-6 hidden md:flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Your Name</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Software Engineer</p>
          </div>
          
          <nav className="space-y-1">
            <NavItem href="#home" label="Home" active />
            <NavItem href="#about" label="About Me" />
            <NavItem href="#projects" label="Projects" />
            <NavItem href="#files" label="Resume & Files" />
          </nav>
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          <p>© 2026 Your Name.</p>
          <p>All rights reserved.</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 scroll-smooth">
        
        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-2xl font-bold tracking-tight">Your Name</h1>
          <nav className="flex space-x-4 mt-4 text-sm overflow-x-auto pb-2">
            <Link href="#home" className="text-zinc-900 dark:text-zinc-100 font-medium">Home</Link>
            <Link href="#about" className="text-zinc-500 dark:text-zinc-400">About</Link>
            <Link href="#projects" className="text-zinc-500 dark:text-zinc-400">Projects</Link>
          </nav>
        </div>

        {/* Hero Section */}
        <section id="home" className="mb-24 pt-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Building digital products, <br className="hidden md:block"/> brands, and experience.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I am a Software Engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at scale.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold tracking-tight">Selected Work</h3>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Project 1: ALX Performance Dashboard */}
            <ProjectCard 
              title="ALX Performance Dashboard"
              description="A comprehensive analytics dashboard delivering real-time insights into cohort performance. Built to handle heavy data loads with zero UI blocking."
              tech={['Next.js', 'Tailwind CSS', 'Vercel', 'Recharts']}
              githubLink="#"
              liveLink="#"
              imgPlaceholder="ALX Dashboard Screenshot"
            />

            {/* Project 2: Feedback Engine */}
            <ProjectCard 
              title="Feedback Engine"
              description="A seamless, embeddable widget for collecting user feedback across multiple product surfaces. Includes dark mode and custom triggers."
              tech={['React', 'Node.js', 'MongoDB']}
              githubLink="#"
              liveLink="#"
              imgPlaceholder="Feedback Engine UI"
            />
            
            {/* Project 3: Ford GoBike Exploration */}
            <ProjectCard 
              title="Ford GoBike Exploration"
              description="Data visualization and analysis of the Ford GoBike system dataset, highlighting usage patterns and user demographics."
              tech={['Python', 'Pandas', 'HTML/CSS', 'Blueprint.js']}
              githubLink="#"
              liveLink="#"
              imgPlaceholder="Data Visualization Charts"
            />
          </div>
        </section>

        {/* About & Files Section */}
        <section id="files" className="mb-12 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h3 className="text-2xl font-bold tracking-tight mb-6">Resume & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FileCard title="Resume (PDF)" description="Updated July 2026" link="/resume.pdf" />
            <FileCard title="Ford GoBike Jupyter Notebook" description="Raw data analysis code" link="/notebook.ipynb" />
          </div>
        </section>

      </main>
    </div>
  );
}

/* --- Reusable Sub-Components --- */

function NavItem({ href, label, active }) {
  return (
    <Link href={href} className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
        active 
          ? 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium' 
          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100'
      }`}>
      {label}
    </Link>
  );
}

function ProjectCard({ title, description, tech, githubLink, liveLink, imgPlaceholder }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300">
      {/* Screenshot Area */}
      <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 relative flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800">
        {/* Replace this div with a Next.js <Image /> component */}
        <span className="text-zinc-400 dark:text-zinc-600 font-medium text-sm">
          [ {imgPlaceholder} ]
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-lg font-bold tracking-tight mb-2">{title}</h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
              {item}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4">
            View Live
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

function FileCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
      <div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center mr-4">
        {/* Simple Document Icon */}
        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
      </div>
      <div>
        <h5 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{title}</h5>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </a>
  );
}