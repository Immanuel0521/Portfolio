import React from 'react';
import { Users, Calendar, Trophy, Music, Palette, Share2 } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: 'Event Co-Ordinator – STSD-2K25',
      organization: 'National Workshop on Designing Software and Rendering',
      description: 'Coordinated national workshop covering AutoCAD, SketchUp Pro, Enscape, and Advanced Surveying Tools (DGPS & LiDAR)',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      achievements: ['300+ Participants', 'Multi-day Event', 'Industry Experts']
    },
    {
      title: 'TNPC Member',
      organization: 'Training and Placement Cell, Civil Engineering Branch',
      description: 'Active member of the Training and Placement Cell, facilitating career development and industry connections for students',
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      achievements: ['Student Mentoring', 'Industry Liaison', 'Career Guidance']
    },
    {
      title: 'Executive Member',
      organization: 'Student Gymkhana Centre (SGC)',
      description: 'Executive member of ISO-certified student organization at RGUKT IIIT Srikakulam',
      icon: Trophy,
      color: 'from-purple-500 to-purple-600',
      achievements: ['ISO Certified', 'Leadership Role', 'Event Management']
    },
    {
      title: 'Graphic Designer',
      organization: 'Multiple Organizations',
      description: 'Creative design work for various student organizations and events',
      icon: Palette,
      color: 'from-orange-500 to-orange-600',
      achievements: ['Visual Identity', 'Event Posters', 'Digital Media']
    },
    {
      title: 'Social Media Manager',
      organization: 'Multiple Student Organizations',
      description: 'Managing social media presence for various student chapters and events',
      icon: Share2,
      color: 'from-pink-500 to-pink-600',
      achievements: ['Samardha (Civil Chapter)', 'Techni Verse', 'TNPC Civil']
    },
    {
      title: 'Tabla & Music',
      organization: 'Cultural Activities',
      description: 'Selected to State Level in Tabla and Music competitions',
      icon: Music,
      color: 'from-green-500 to-green-600',
      achievements: ['State Level', 'Traditional Music', 'Performance Arts']
    }
  ];

  return (
    <section id="activities" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Extra-Curricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Activities</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leadership roles, creative pursuits, and community involvement that showcase well-rounded development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-r ${activity.color} rounded-xl`}>
                  <activity.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{activity.organization}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-medium mb-3">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {activity.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className={`px-3 py-1 bg-gradient-to-r ${activity.color.replace('to-', 'to-').replace('500', '500/20').replace('600', '600/20')} border border-white/20 rounded-full text-xs font-medium text-white`}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Leadership Philosophy</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              "I believe in leading by example and fostering collaborative environments where everyone can contribute their best. 
              My diverse involvement in technical, creative, and cultural activities has taught me the importance of adaptability, 
              effective communication, and the power of bringing people together to achieve common goals."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <p className="text-gray-400">Leadership Roles</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-teal-400 mb-2">4+</div>
              <p className="text-gray-400">Organizations</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-purple-400 mb-2">State</div>
              <p className="text-gray-400">Level Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;