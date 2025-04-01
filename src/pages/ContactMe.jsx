import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white relative">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <main className="flex flex-col items-center justify-center px-6 py-20 relative z-10 min-h-screen">
        <div className="w-full max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 text-center">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 text-center">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Contact Card */}
            <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-xl border border-slate-700 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-teal-400">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-teal-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-slate-400">Email</h3>
                    <a href="mailto:Yassine.Sinif@emsi-edu.ma" className="text-lg hover:text-teal-400 transition">
                      Yassine.Sinif@emsi-edu.ma
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-teal-400">
                    <FaPhone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-slate-400">Phone</h3>
                    <a href="tel:+212623842535" className="text-lg hover:text-teal-400 transition">
                      +212 623 842 535
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-teal-400">
                    <FaLinkedin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-slate-400">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/yassine-sinif" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg hover:text-teal-400 transition"
                    >
                      linkedin.com/in/yassine-sinif
                    </a>
                  </div>
                </div>
                
                {/* GitHub */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-teal-400">
                    <FaGithub size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-slate-400">GitHub</h3>
                    <a 
                      href="https://github.com/ysinif" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg hover:text-teal-400 transition"
                    >
                      github.com/ysinif
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactMe;
