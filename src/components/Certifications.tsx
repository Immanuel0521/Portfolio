import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Smart Tools & Smarter Designs',
      issuer: 'Professional Development',
      description: 'Advanced training in modern design tools and methodologies',
      icon: '🎯',
    },
    {
      title: 'AutoCAD Certification',
      issuer: 'Bhavanam\'s C2C',
      description: 'Comprehensive training in 2D drafting and 3D modeling',
      icon: '📐',
    },
    {
      title: 'Revit Professional',
      issuer: 'Bhavanam\'s C2C',
      description: 'Building Information Modeling (BIM) expertise',
      icon: '🏗️',
    },
    {
      title: 'SketchUp Mastery',
      issuer: 'STSD 25',
      description: '3D modeling and visualization skills',
      icon: '🎨',
    },
    {
      title: 'STAAD.Pro Certification',
      issuer: 'Bhavanam\'s C2C',
      description: 'Structural analysis and design software proficiency',
      icon: '🏢',
    },
    {
      title: 'Photoshop',
      issuer: 'Udemy',
      description: 'Digital image editing and graphic design',
      icon: '🖼️',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">{cert.issuer}</p>
                </div>
                <Award className="text-yellow-500" size={24} />
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={14} />
                  <span>Certified</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm">
                  <ExternalLink size={14} />
                  Verify
                </button>
              </div>

              <div className="mt-4 w-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 h-1 rounded-full">
                <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-full opacity-75"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Continuing Education</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm committed to staying current with the latest technologies and methodologies in civil engineering and design.
            Currently pursuing additional certifications in advanced structural analysis and sustainable design practices.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
              Advanced Structural Analysis
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 text-sm">
              Sustainable Design
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
              Project Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;