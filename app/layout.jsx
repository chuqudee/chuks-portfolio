import './globals.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export const metadata = {
  title: 'Chukwudi Okereafor — Data Scientist & ML Engineer',
  description:
    'Data Scientist & Machine Learning Engineer building scalable AI products — recommender systems, LLM tools, and real-time analytics dashboards.',
  openGraph: {
    title: 'Chukwudi Okereafor — Data Scientist & ML Engineer',
    description:
      'Data Scientist & Machine Learning Engineer building scalable AI products.',
    type: 'website',
  },
};

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#files', label: 'Resume & Files' },
  { href: '#contact', label: 'Contact' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents flash-of-wrong-theme by setting the class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                var isDark = t ? t === 'dark' : true;
                if (isDark) document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#0a0a0f] text-zinc-900 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        <div className="flex min-h-screen">

          {/* ── Mobile top bar ─────────────────────────────── */}
          <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
            <span className="font-bold tracking-tight">
              Chukwudi<span className="text-indigo-500">.</span>
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileMenu navLinks={navLinks} />
            </div>
          </div>

          {/* ── Left Navigation Pane (Fixed, Desktop) ────────── */}
          <aside className="w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 p-6 hidden md:flex flex-col justify-between fixed h-screen bg-white dark:bg-[#0a0a0f]">
            <div>
              <div className="mb-10">
                <h1 className="text-xl font-bold tracking-tight">
                  Chukwudi <span className="text-indigo-500">Okereafor</span>
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Data Scientist &amp; ML Engineer
                </p>
              </div>

              <nav className="space-y-1">
                {navLinks.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      i === 0
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://github.com/chuqudee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-indigo-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A10.5 10.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
                  </svg>
                </a>
                <a
                  href="mailto:mikel.okereafor@gmail.com"
                  className="text-zinc-500 hover:text-indigo-500 transition-colors"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5h18v14H3z" strokeLinejoin="round" />
                    <path d="M3 6l9 7 9-7" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-500">© 2026 Chukwudi Okereafor</p>
              <ThemeToggle />
            </div>
          </aside>

          {/* ── Page Content ──────────────────────────────── */}
          <main className="flex-1 md:ml-64 overflow-y-auto p-6 pt-20 md:p-12 md:pt-12 lg:p-16 scroll-smooth">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
