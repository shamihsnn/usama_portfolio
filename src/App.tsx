import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, FlaskRound as Flask, Code2, Brain, Database, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <a href="#" className="text-xl font-bold text-blue-400">UH</a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-800 to-gray-900 animate-gradient bg-300%"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-accent-purple to-primary-400">
                Usama Hsnn
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Medical Lab Professional | MERN Stack Developer | Python Engineer
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
              <a href="mailto:usamahsnnn@gmail.com" 
                 className="p-3 rounded-full bg-primary-800/30 hover:bg-primary-700/50 transition-all duration-300 hover:scale-110">
                <Mail size={24} className="text-primary-300" />
              </a>
              <a href="https://www.linkedin.com/in/usama-hsnnn" 
                 className="p-3 rounded-full bg-primary-800/30 hover:bg-primary-700/50 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} className="text-primary-300" />
              </a>
              <a href="https://github.com/usmasyy" 
                 className="p-3 rounded-full bg-primary-800/30 hover:bg-primary-700/50 transition-all duration-300 hover:scale-110">
                <Github size={24} className="text-primary-300" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed mb-6">
              I don't just study medicine; I code to create solutions. As a Medical Lab Technology student in my 7th semester, 
              I'm passionate about merging healthcare and technology. My journey from diagnostics to programming drives me to 
              build applications that improve patient care using the MERN stack.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flask size={24} />
                </div>
                <h3 className="font-semibold">Lab Tech</h3>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 size={24} />
                </div>
                <h3 className="font-semibold">MERN Stack</h3>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="font-semibold">ML</h3>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database size={24} />
                </div>
                <h3 className="font-semibold">Data Analysis</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Local Alignment Tool */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-400/30">
              <div className="relative">
                <img 
                  src="/images/locally.png" 
                  alt="Local Alignment Tool"
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Local Alignment Tool</h3>
                <p className="text-gray-300 mb-4">
                  A specialized tool for performing local sequence alignment in bioinformatics research, helping researchers analyze DNA and protein sequences efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Bioinformatics</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="https://shamihsnn.github.io/local-alignment-tool/" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Symptoms Indicators */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-purple-400/30">
              <div className="relative">
                <img 
                  src="/images/bioinfo.png" 
                  alt="Symptoms Indicators"
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Symptoms Indicators</h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive web application for tracking and analyzing medical symptoms, helping patients and healthcare providers monitor health patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                 
                </div>
                <div className="flex items-center space-x-4">
                  <a href="https://symptoms-indicators-usama.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-purple-400 hover:text-purple-300 flex items-center space-x-1">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Blood Connects PK */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-red-400/30">
              <div className="relative">
                <img 
                  src="/images/blood.png" 
                  alt="Blood Connects PK"
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-red-400">Blood Connects PK</h3>
                <p className="text-gray-300 mb-4">
                  A platform connecting blood donors with those in need across Pakistan, streamlining the blood donation process and saving lives.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">javascript</span>
               
                </div>
                <div className="flex items-center space-x-4">
                  <a href="https://blod-connects-pk.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-red-400 hover:text-red-300 flex items-center space-x-1">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Medical Map */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-green-400/30">
              <div className="relative">
                <img 
                  src="/images/medimap.png" 
                  alt="Medical Map"
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-400">Medical Map</h3>
                <p className="text-gray-300 mb-4">
                  An interactive map application that helps users locate nearby medical laboratories and healthcare facilities, making healthcare more accessible.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                 
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"> open street Maps API</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" 
                     className="text-green-400 hover:text-green-300 flex items-center space-x-1">
                    <ExternalLink size={18} />
                    <span>Coming Soon</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-800 rounded-lg p-8 hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Medical Laboratory Assistant</h3>
                <span className="text-gray-400">Apr 2024 - Oct 2024</span>
              </div>
              <h4 className="text-blue-400 mb-4">WAH General Hospital</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Spearheaded high-volume diagnostic testing operations, processing 200+ weekly tests with 98% accuracy</li>
                <li>Led knowledge transfer initiatives by mentoring 5 junior staff members</li>
                <li>Established new quality control procedures reducing reporting time by 25%</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Intern</h3>
                <span className="text-gray-400">Apr 2024 - Sep 2024</span>
              </div>
              <h4 className="text-blue-400 mb-4">Islamabad Diagnostic Centre (PVT) LTD</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-4">Technical</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MERN Stack Development</li>
                <li>Python Programming</li>
                <li>PCR Primer Design</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-4">Laboratory</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Diagnostic Testing</li>
                <li>Quality Control</li>
                <li>Lab Management</li>
                <li>Safety Protocols</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Airtable</li>
                <li>Microsoft Excel</li>
                <li>Laboratory Information Systems</li>
                <li>Git Version Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8">
              Let's connect to collaborate on innovative healthcare solutions.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:usamahsnnn@gmail.com" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/usama-hsnnn" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Usama Hsnn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
