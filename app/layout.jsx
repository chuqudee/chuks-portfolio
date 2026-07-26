import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        <div className="flex h-screen">
          
          {/* Left Navigation Pane (Fixed) */}
          <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-6 hidden md:flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h1 className="text-xl font-bold tracking-tight">Your Name</h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Software Engineer</p>
              </div>
              
              <nav className="space-y-1">
                <Link href="#home" className="block px-3 py-2 rounded-md text-sm font-medium bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100">Home</Link>
                <Link href="#about" className="block px-3 py-2 rounded-md text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">About Me</Link>
                <Link href="#projects" className="block px-3 py-2 rounded-md text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">Projects</Link>
                <Link href="#files" className="block px-3 py-2 rounded-md text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">Resume & Files</Link>
              </nav>
            </div>

            <div className="text-sm text-zinc-500">
              <p>© 2026 Your Name</p>
            </div>
          </aside>

          {/* Page Content Container */}
          <main className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 scroll-smooth">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}