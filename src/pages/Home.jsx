import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white relative">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center px-6 py-20 relative z-10 min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-white">Welcome to My </span>
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            I'm a **Software Engineering student at EMSI**, currently in my third year.  
            I specialize in **building efficient and scalable software solutions**, 
            leveraging **modern web technologies, backend systems, and database management**.  
            Passionate about solving **real-world problems** through **code, architecture, and automation**.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700 text-center">
              <div className="text-teal-400 text-4xl font-bold">3+</div>
              <div className="text-lg font-medium text-gray-300">Years of Learning</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700 text-center">
              <div className="text-teal-400 text-4xl font-bold">20+</div>
              <div className="text-lg font-medium text-gray-300">Completed Projects</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700 text-center">
              <div className="text-teal-400 text-4xl font-bold">8+</div>
              <div className="text-lg font-medium text-gray-300">Technologies Mastered</div>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-400 px-8 py-4 rounded-lg text-xl font-semibold text-slate-900 shadow-lg hover:shadow-teal-500/20 transition duration-300 hover:-translate-y-1"
          >
            Explore My Skills <span className="ml-2">→</span>
          </Link>
        </div>
      </main>

      {/* Social Links */}
      <div className="fixed bottom-6 left-6 flex space-x-4 z-10">
  <a 
    href="https://github.com/yassine-sinif" 
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub className="text-white text-xl" />
  </a>
  <a 
    href="https://www.linkedin.com/in/yassine-sinif-a73996241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-white text-xl" />
  </a>
  <a 
    href="https://www.instagram.com/yassine__sinif?igsh=MWplNWxraDh2a3Q5" 
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-white text-xl" />
  </a>
</div>


     
      <button className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition z-10">
        🌙
      </button>
    </div>
  );
}

export default Home;
