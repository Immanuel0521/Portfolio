import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:immanuel9959@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      immanuel9959@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+919959290521" className="text-white hover:text-teal-400 transition-colors">
                      +91 9959290521
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Nandyal, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:scale-110 transition-all duration-300">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:scale-110 transition-all duration-300">
                  <Github className="text-white" size={20} />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg hover:scale-110 transition-all duration-300">
                  <Instagram className="text-white" size={20} />
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for Projects
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-white">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Preferred Contact</span>
                  <span className="text-white">Email / Phone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, requirements, timeline, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 Immanuel Avula. Built with passion for civil engineering and design.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Building the future, one design at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;