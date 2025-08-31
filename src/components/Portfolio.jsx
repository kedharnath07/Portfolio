
import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200">
      
      <header className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold tracking-tight">Heerematam Kedharnath</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#education" className="hover:text-indigo-600 transition">Education</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        
        <section id="hero" className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-indigo-600">Kedharnath</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full Stack & Frontend Developer building modern, responsive, and engaging web applications.
          </p>
        </section>

        
        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-semibold mb-10 border-b-2 border-indigo-600 inline-block pb-2">
            Projects
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Netflix Clone",
                desc: "Responsive UI clone of Netflix built using HTML, CSS, and JavaScript.",
                skills: ["HTML", "CSS", "JavaScript"],
                url:"https://netfix-clone-omega-red.vercel.app/"
              },
              {
                title: "FlashDrop",
                desc: "“Flash Drop is a React-based e-commerce web app (like eKart) featuring product listings, filters, and a simple cart system",
                skills: ["HTML", "Bootsrtap", "JavaScript","ReactJs"],
                url:"https://flash-drop.vercel.app/"
              },
              {
                title: "GitHub Finder",
                desc: "Fetches user data from GitHub API and displays profile details.",
                skills: ["React", "API", "CSS"],
                url:"https://netfix-clone-omega-red.vercel.app/"
              },
              {
                title: "ToDOList",
                desc: "A React-based To-Do List web app for adding, completing, and managing daily tasks with a simple and responsive UI.",
                skills: ["React", "JavaScript", "Bootstrap"],
                url:"https://to-do-list-eight-blush-60.vercel.app/"
              },
              {
                title: "EatAndSplit",
                desc: "A React app to manage friends’ shared expenses, where you can add/remove friends, split bills, track balances, and persist data in local storage.",
                skills: ["React", "JavaScript", "TailwindCSS"],
                url:"https://eat-and-split-46pu.vercel.app/"
              }
            ].map((proj, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-semibold mb-2">{proj.title}</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <a href={proj.url} className="text-indigo-600 hover:underline font-semibold" target='blank'>
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>       
        <section id="education" className="mb-20">
          <h3 className="text-3xl font-semibold mb-10 border-b-2 border-indigo-600 inline-block pb-2">
            Education
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Bachelor's Degree in Computer Science And Engineering",
                desc: "G Pullaiah College of Engineering and Technology (2021 - 2025) – 78%"
              },
              {
                title: "Intermediate (M.P.C)",
                desc: "Deeksha Junior College (2019 - 2021) – 80%"
              },
              {
                title: "Schooling",
                desc: "Zilla Parishad High School (2018 - 2019) – 83%"
              }
            ].map((edu, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-semibold mb-2">{edu.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section id="about" className="mb-20 max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-600 inline-block pb-2">
            About Me
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate developer with expertise in HTML, CSS, JavaScript,Bootstrap, React,NodeJs,ExpressJs and TailwindCSS.
            I love building clean, responsive, and user-friendly applications, with a focus on both
            frontend and backend development.
          </p>
        </section>

        
        <section id="contact" className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-600 inline-block pb-2 text-center">
            Contact Me
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        &copy; 2025 Heerematam Kedharnath. All rights reserved.
      </footer>
    </div>
  );
}
