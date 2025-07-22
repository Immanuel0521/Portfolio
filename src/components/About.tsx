import React from 'react';
import { GraduationCap, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about transforming ideas into reality through innovative civil engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To gain practical experience in civil engineering by applying my technical skills in design and 
                analysis. Eager to contribute to real-world projects while enhancing my knowledge through 
                hands-on learning.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold">Bachelor of Technology in Civil Engineering</h4>
                  <p className="text-blue-400">RGUKT IIIT Srikakulam (2022 – 2026)</p>
                  <p className="text-gray-400 text-sm">Final Year Student</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Pre University Course</h4>
                  <p className="text-blue-400">RGUKT IIIT Srikakulam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">6+</h3>
              <p className="text-gray-400">Certifications</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multiple</h3>
              <p className="text-gray-400">Leadership Roles</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Technical Design', 'Project Management', 'Team Leadership', 'Creative Problem Solving'].map((strength) => (
                  <span key={strength} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;