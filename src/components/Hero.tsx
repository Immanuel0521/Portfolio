import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Immanuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Avula</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light animate-fade-in-delay">
              Aspiring Civil Designer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Final year Civil Engineering student passionate about innovative design solutions. 
              Experienced in AutoCAD, Revit, SketchUp, and STAAD.Pro with a strong foundation 
              in structural analysis and architectural design.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-delay-3">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-blue-400" />
              <span>Nandyal, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} className="text-teal-400" />
              <span>immanuel9959@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} className="text-orange-400" />
              <span>+91 9959290521</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View Projects
            </button>
            <a href="https://drive.google.com/uc?export=download&id=1XaK-EzkzsW5yvBtfJ5zOpUI0K_wNOtlt" download="Immanuel Resume.pdf" className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30 flex items-center gap-2" role="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
  Download Resume
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;