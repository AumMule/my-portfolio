import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-all duration-500">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 shadow-md dark:shadow-gray-800">
          <h1 className="text-2xl font-bold">Aum Mule</h1>
          <div className="flex items-center gap-4">
            <a href="https://github.com/AumMule" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/aum-mule-b3197b339" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center mt-12 px-4">
          <h2 className="text-4xl font-bold mb-2">Hi, I'm Aum Mule 👋</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            BTech student in AI & ML, passionate about full-stack web development and building creative tech solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-12 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 border-b pb-1 w-fit">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["C", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "Flask", "Tailwind CSS", "Git", "GitHub"].map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-12 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 border-b pb-1 w-fit">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">Kite Battle Game</h4>
              <p className="text-sm mt-1 italic">HTML, CSS, JavaScript</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Multiplayer kite game with real-time scoring</li>
                <li>Responsive UI & leaderboard</li>
              </ul>
              <a href="https://kite-battle.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 inline-block">
                Visit Project
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 border-b pb-1 w-fit mx-auto">Contact</h3>
          <p>Email: <a href="mailto:aummule11@gmail.com" className="text-blue-500">aummule11@gmail.com</a></p>
          <p>Phone: <a href="tel:+918530456779" className="text-blue-500">8530456779</a></p>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm py-4 border-t dark:border-gray-700 opacity-60">
          &copy; {new Date().getFullYear()} Aum Mule • Built with ❤️ using React & Tailwind
        </footer>
      </div>
    </div>
  );
}

export default App;
