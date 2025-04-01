import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpeg';  // Ensure the path is correct

// Importing pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Todo from './pages/todo'; // Import the Todo component

function App() {
  // State to track the menu's open/close status
  const [open, setOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <Router>
      <div>
    
        {/* Navigation Bar */}
        <nav className="relative flex justify-between items-center p-6 bg-gray-900 text-white shadow-lg">
          {/* Logo with circular frame */}
          <div className="flex items-center space-x-4">
            {/* Circular Logo */}
            <div className="w-16 h-16 rounded-full border-4 border-teal-500 overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-2xl font-bold">Yassine Sinif</div>
          </div>

          {/* Hamburger Button (visible only on small screens) */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl">
            ☰
          </button>

          {/* Desktop Navigation Links */}
          <div className={`${open ? "block" : "hidden"} lg:flex space-x-6 text-lg`}>
            <Link to="/" onClick={closeMenu} className="hover:text-blue-400 transition duration-300">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-blue-400 transition duration-300">About</Link>
            <Link to="/projects" onClick={closeMenu} className="hover:text-blue-400 transition duration-300">Projects</Link>
            <Link to="/contactMe" onClick={closeMenu} className="hover:text-blue-400 transition duration-300">Contact Me</Link>
          </div>

          {/* Mobile Menu Overlay (Full-screen menu on small screens) */}
          {open && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 lg:hidden">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={closeMenu} className="text-4xl text-white">
                  ✕
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
                <Link to="/" onClick={closeMenu} className="text-white hover:text-blue-400 transition duration-300">Home</Link>
                <Link to="/about" onClick={closeMenu} className="text-white hover:text-blue-400 transition duration-300">About</Link>
                <Link to="/projects" onClick={closeMenu} className="text-white hover:text-blue-400 transition duration-300">Projects</Link>
                <Link to="/contactMe" onClick={closeMenu} className="text-white hover:text-blue-400 transition duration-300">Contact Me</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/todo" element={<Todo />} /> {/* New route for Todo component */}
        </Routes>
      </div>
 
    </Router>
  );
}

export default App;