import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Code, Tag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  software: string[];
  short_description: string;
  long_description: string;
  images: string[];
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-300 group"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium">Back to Projects</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative glass-card p-4 rounded-2xl">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-blue-400 scale-105'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Title and Category */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
          </div>

          {/* Software Tags */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
                <Code className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Software & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.software.map((soft) => (
                <span
                  key={soft}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 font-medium"
                >
                  <Tag size={14} />
                  {soft}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Project Overview</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.long_description}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {project.images.length}
                </div>
                <p className="text-gray-400">Project Images</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  {project.software.length}
                </div>
                <p className="text-gray-400">Tools Used</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <Calendar className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Project Status</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;