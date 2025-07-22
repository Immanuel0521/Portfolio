import React from 'react';
import { Wrench, Palette, Users, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'AutoCAD', level: 90, color: 'from-red-500 to-red-600' },
    { name: 'SketchUp', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Revit', level: 80, color: 'from-green-500 to-green-600' },
    { name: 'STAAD.Pro', level: 75, color: 'from-purple-500 to-purple-600' },
    { name: 'Microsoft Office', level: 85, color: 'from-orange-500 to-orange-600' },
    { name: 'Photoshop', level: 70, color: 'from-pink-500 to-pink-600' },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare, color: 'text-blue-400' },
    { name: 'Teamwork', icon: Users, color: 'text-teal-400' },
    { name: 'Leadership', icon: Users, color: 'text-purple-400' },
    { name: 'Problem Solving', icon: Wrench, color: 'text-orange-400' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical proficiencies and soft skills developed through academic projects and practical experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <Wrench className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Specializations */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                    <skill.icon className={skill.color} size={20} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Specializations</h3>
              </div>

              <div className="space-y-3">
                {[
                  'Civil Engineering Knowledge',
                  'Reading Technical Drawings',
                  'Structural Analysis & Design',
                  '3D Modeling & Visualization',
                  'Project Coordination',
                  'Graphic Design'
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
                    <span className="text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;