"use client";
import { useState } from "react";

const PROJECTS = [
  {
    title: "ALX PeerFinder",
    tagline: "Automated peer-matching platform for 6,000+ learners",
    description:
      "Engineered a custom matching algorithm (global preference hierarchy + mutual satisfaction requirement) that paired 6,174 users at a 99.2% match rate with a median matching time of 29 minutes — driving 98% user activation vs. 50.2% for non-matched users.",
    stack: ["React", "Flask", "AWS S3", "Gmail API"],
    liveUrl: "https://alx-peerfinder.vercel.app",
    githubUrl: "https://github.com/chuqudee-sand/alx-peerfinder",
    image: "/images/ss1.jpg",
    tag: "Flagship",
  },
  {
    title: "ALX Feedback Engine",
    tagline: "Real-time program feedback analytics across 15+ ALX programs",
    description:
      "Full-stack analytics dashboard (Next.js + FastAPI + Supabase) that ingests Zoom webinar data, Google Forms feedback, and Gemini 2.0 Flash AI summarization to give leadership live CSAT, NPS, and pillar-metric visibility across every ALX program vertical.",
    stack: ["Next.js", "FastAPI", "Supabase", "Gemini AI"],
    liveUrl: "https://alx-feedback-engine.vercel.app/",
    githubUrl: "https://github.com/chuqudee-sand/alx-feedback-engine",
    image: "/images/ss2.jpg",
    tag: "Flagship",
  },
  {
    title: "CA Performance Dashboard",
    tagline: "Delivery & Graduation OKR tracking for the Career Accelerator",
    description:
      "Executive-facing OKR/KPI tracker surfacing activation rate, projected graduations, and revenue-at-risk in real time — with an auto-generated delivery narrative and country-level graduation pipeline breakdown for leadership decision-making.",
    stack: ["React", "Data Viz", "OKR Tracking"],
    liveUrl: "https://alx-ca-performance-dashboard.vercel.app/",
    githubUrl: "https://github.com/chuqudee-sand/alx-ca-performance-dashboard",
    image: "/images/ss3.jpg",
    tag: "Flagship",
  },
  {
    title: "CA Leaderboard — Cyber-Sanctum",
    tagline: "Gamified learner leaderboard with a cyberpunk RPG theme",
    description:
      'A playful, high-engagement leaderboard experience ("The ALX Cyber-Sanctum") that reframes program tracks as RPG guild halls, driving friendly competition and visibility into top performers across cohorts.',
    stack: ["React", "Gamification", "UI/UX"],
    liveUrl: "https://ca-leaderboard-alx.vercel.app/",
    githubUrl: "https://github.com/chuqudee-sand/ca-leaderboard",
    image: null,
    tag: "Product",
  },
  {
    title: "Releaf Earth AI Agent",
    tagline: "Conversational AI assistant for sustainability & climate action",
    description:
      "An LLM-powered chatbot agent designed to have empathetic, informative conversations around environmental sustainability, deployed as a live service.",
    stack: ["Python", "LLM", "Render"],
    liveUrl: "https://releafearthbot.onrender.com/",
    githubUrl: "https://github.com/chuqudee/Releaf-Earth-AI-Agent",
    image: null,
    tag: "AI",
  },
  {
    title: "Pose Detection & Workout Classification",
    tagline: "Computer vision model for real-time fitness form tracking",
    description:
      "Trained an AI-powered pose-estimation model using MediaPipe to classify workout movements and track exercise form, improving personalization of digital fitness programs by 30%.",
    stack: ["Python", "MediaPipe", "Computer Vision"],
    liveUrl: null,
    githubUrl:
      "https://github.com/chuqudee/Pose_Workout_Detection_and_Classification_with_Mediapipe",
    image: null,
    tag: "AI",
  },
  {
    title: "Insurance Claim Modeling",
    tagline: "Predictive modeling for insurance claim risk",
    description:
      "End-to-end ML pipeline for predicting insurance claims — feature engineering, model selection, and evaluation to support underwriting decisions.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    liveUrl: null,
    githubUrl: "https://github.com/chuqudee/INSURANCE-CLAIM-MODELING",
    image: null,
    tag: "Data Science",
  },
  {
    title: "Ford GoBike Exploratory Data Analysis",
    tagline: "Uncovering ride patterns in the Bay Area bike-share system",
    description:
      "Exploratory and explanatory data analysis of the Ford GoBike dataset — investigating rider demographics, trip duration patterns, and station usage trends, communicated through a polished data story.",
    stack: ["Python", "Pandas", "Matplotlib"],
    liveUrl: "/FORD_GOBIKE_EXPLANATORY_ANALYSIS.html",
    githubUrl: "https://github.com/chuqudee/FORD-GO_BIKE-EXPLORATORY-DATA-ANALYSIS",
    image: null,
    tag: "Data Science",
  },
  {
    title: "AirBnB Clone v4",
    tagline: "Full-stack AirBnB clone — backend console, API, and DB storage",
    description:
      "A comprehensive full-stack engineering project replicating core AirBnB functionality: a custom command interpreter, ORM-style storage engine, RESTful API, and web front end.",
    stack: ["Python", "MySQL", "Flask", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/chuqudee/AirBnB_clone_v4",
    image: null,
    tag: "Software Engineering",
  },
];

const SKILLS = {
  "Machine Learning & AI": [
    "Predictive Modeling",
    "Recommender Systems",
    "Computer Vision",
    "Generative AI (RAG, Embeddings)",
    "A/B Testing",
  ],
  "Languages & Frameworks": ["Python", "SQL", "JavaScript", "React", "Next.js"],
  "Data & MLOps": ["Pandas", "Scikit-learn", "dbt", "DuckDB", "CI/CD"],
  "Cloud & Infra": ["AWS", "GCP", "Vercel", "Supabase", "GitHub"],
};

const EXPERIENCE = [
  {
    role: "Data Scientist & ML Engineer (Technical Mentor)",
    company: "ALX Africa",
    period: "Sept 2023 – Present",
    location: "Remote",
    points: [
      "Scaled PeerFinder to 6,174 matched users at 99.2% match accuracy, driving 98% activation.",
      "Deployed an LLM-powered Q&A chatbot (OpenAI embeddings + FAISS), cutting query resolution time by 85%.",
      "Built automated Executive KPI dashboards giving leadership real-time enrollment visibility.",
      "Mentor junior data scientists — helped lift program completion rates by 15%.",
    ],
  },
  {
    role: "Data Scientist & ML Engineer",
    company: "Omdena",
    period: "Dec 2022 – Aug 2024",
    location: "Remote · CA, USA",
    points: [
      "Built a grocery recommender system for the European market, lifting purchase relevance by 20%.",
      "Developed an empathetic AI chatbot that boosted engagement among vulnerable users by 25%.",
      "Trained a pose-detection CV model, improving fitness-app personalization by 30%.",
    ],
  },
  {
    role: "Data Analyst",
    company: "African Women Leaders Think-Tank",
    period: "Oct 2013 – Dec 2016",
    location: "Lagos, Nigeria",
    points: [
      "Led data cleansing initiatives that helped grow mentorship program engagement by 30%.",
      "Delivered EDA insights that directly informed Board-level strategic decisions.",
    ],
  },
];

function Tag({ children }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100 dark:hover:shadow-indigo-950/50">
      {p.image ? (
        <div className="h-44 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400" />
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <Tag>{p.tag}</Tag>
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{p.title}</h3>
        <p className="text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-3">{p.tagline}</p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg py-2 transition-colors"
            >
              Live Demo
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 rounded-lg py-2 transition-colors ${
                p.liveUrl ? "flex-1" : "w-full"
              }`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <div>
      {/* ── HERO / HOME ───────────────────────────────────── */}
      <section id="home" className="relative pt-4 pb-20">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-fuchsia-400/10 dark:bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <p className="text-indigo-500 dark:text-indigo-400 font-semibold mb-4 tracking-wide">
            👋 Hi, I'm Chukwudi
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl text-zinc-900 dark:text-white">
            Data Scientist &amp; ML Engineer building{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent">
              intelligent products
            </span>{" "}
            that scale.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-6 max-w-2xl leading-relaxed">
            I design and ship end-to-end ML systems — from recommender
            engines and LLM-powered tools to real-time analytics dashboards —
            for programs reaching thousands of users across Africa.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-6 py-3 transition-colors shadow-lg shadow-indigo-500/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-200 font-semibold rounded-lg px-6 py-3 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-6 sm:gap-10 mt-16 text-sm">
            <div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">6,174</div>
              <div className="text-zinc-500 mt-1">Learners matched<br className="hidden sm:block" /> (PeerFinder)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">85%</div>
              <div className="text-zinc-500 mt-1">Faster query<br className="hidden sm:block" /> resolution (LLM)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">15+</div>
              <div className="text-zinc-500 mt-1">Programs on<br className="hidden sm:block" /> Feedback Engine</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="py-16 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-900 dark:text-white">About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          I'm a results-driven Data Scientist and Machine Learning Engineer
          with a track record of designing, deploying, and scaling
          intelligent systems that drive operational efficiency and user
          engagement. My work spans end-to-end ML pipeline development,
          Generative AI (LLMs, RAG), and building automated data
          infrastructures — translating complex business problems into
          scalable, data-driven products, while mentoring technical teams and
          communicating strategic insights to leadership.
        </p>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────── */}
      <section id="projects" className="py-16 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-white">Selected Projects</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          A mix of production tools, ML research, and data storytelling.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-sm font-medium rounded-full px-4 py-1.5 transition-colors ${
                filter === t
                  ? "bg-indigo-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────── */}
      <section id="experience" className="py-16 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-zinc-900 dark:text-white">Experience</h2>
        <div className="space-y-10">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="grid sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <div className="font-semibold text-zinc-900 dark:text-white">{e.company}</div>
                <div className="text-sm text-zinc-500">{e.period}</div>
                <div className="text-sm text-zinc-500">{e.location}</div>
              </div>
              <div className="sm:col-span-3">
                <div className="font-semibold text-indigo-600 dark:text-indigo-300 mb-2">{e.role}</div>
                <ul className="space-y-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-zinc-600 dark:text-zinc-400 text-sm flex gap-2">
                      <span className="text-indigo-500 mt-0.5">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────── */}
      <section id="skills" className="py-16 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-zinc-900 dark:text-white">Skills</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
              <div className="font-semibold text-zinc-900 dark:text-white mb-3">{cat}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-transparent text-zinc-600 dark:text-zinc-300 rounded-md px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILES / RESUME ────────────────────────────────── */}
      <section id="files" className="py-16 border-t border-zinc-200 dark:border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Resume &amp; Files</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 rounded-xl px-5 py-4 transition-colors"
          >
            <span className="text-2xl">📄</span>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white text-sm">Resume (PDF)</div>
              <div className="text-xs text-zinc-500">View or download</div>
            </div>
          </a>
          <a
            href="/FORD_GOBIKE_EXPLANATORY_ANALYSIS.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 rounded-xl px-5 py-4 transition-colors"
          >
            <span className="text-2xl">📊</span>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white text-sm">Ford GoBike EDA Report</div>
              <div className="text-xs text-zinc-500">Full analysis writeup</div>
            </div>
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
          Let's build something great.
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-8">
          Open to data science, ML engineering, and AI product opportunities.
          Reach out — I'd love to hear about what you're working on.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mikel.okereafor@gmail.com"
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-6 py-3 transition-colors shadow-lg shadow-indigo-500/20"
          >
            mikel.okereafor@gmail.com
          </a>
          <a
            href="https://github.com/chuqudee"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-200 font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-zinc-400 dark:text-zinc-600 text-sm mt-16">
          © {new Date().getFullYear()} Chukwudi Michael Okereafor. Built with Next.js &amp; Tailwind.
        </p>
      </section>
    </div>
  );
}
