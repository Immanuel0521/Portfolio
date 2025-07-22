import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

interface Project {
  id: string;
  title: string;
  category: string;
  software: string[];
  short_description: string;
  long_description: string;
  images: string[];
}

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Academic Building CAD Drawings',
      category: 'CAD Drawings',
      software: ['AutoCAD'],
      short_description: 'Comprehensive architectural plans including floor plans, elevations, and sections for campus academic buildings.',
      long_description: 'This comprehensive project involved creating detailed architectural drawings for a multi-story academic building complex. The project included complete floor plans for all levels, detailed elevations showing the building facade from all angles, cross-sectional views revealing internal structure and spatial relationships, and technical details for construction implementation. The drawings were created following industry standards and building codes, incorporating accessibility features, fire safety requirements, and sustainable design principles. The project demonstrates proficiency in technical drafting, spatial planning, and architectural documentation using AutoCAD software.',
      images: [
        'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: '2',
      title: 'Residential Floor Plans',
      category: 'CAD Drawings',
      software: ['AutoCAD'],
      short_description: 'Detailed residential floor plans with beam layouts and column layouts for structural design.',
      long_description: 'A comprehensive residential design project featuring detailed floor plans for a modern family home. The project encompasses complete architectural layouts including room arrangements, furniture placement, and circulation patterns. Structural elements such as beam layouts and column positioning were carefully designed to ensure optimal load distribution and structural integrity. The plans include detailed dimensions, material specifications, and construction notes. Special attention was given to natural lighting, ventilation, and energy efficiency. The project demonstrates expertise in residential design principles, structural planning, and technical documentation standards.',
      images: [
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: '3',
      title: '3D Campus Layout Design',
      category: 'Layout & 3D Design',
      software: ['SketchUp'],
      short_description: 'Complete 3D modeling and visualization of campus layout with landscaping and building placement.',
      long_description: 'An extensive 3D modeling project that involved creating a comprehensive campus master plan using SketchUp. The project included detailed 3D models of multiple academic buildings, recreational facilities, and support structures. Landscape design elements such as walkways, green spaces, parking areas, and outdoor gathering spaces were integrated into the overall design. The model incorporates topographical considerations, drainage patterns, and sustainable design features. Advanced rendering techniques were used to create realistic visualizations that help stakeholders understand the spatial relationships and aesthetic impact of the proposed development. The project showcases skills in 3D modeling, landscape architecture, and visual communication.',
      images: [
        'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: '4',
      title: 'Structural Analysis Project',
      category: 'Structural Analysis',
      software: ['STAAD.Pro'],
      short_description: 'Comprehensive structural analysis and design of multi-story buildings with load calculations.',
      long_description: 'A detailed structural engineering project involving the analysis and design of a multi-story commercial building using STAAD.Pro software. The project included comprehensive load calculations considering dead loads, live loads, wind loads, and seismic forces according to relevant building codes. Structural elements including beams, columns, slabs, and foundations were analyzed for various load combinations. The analysis incorporated advanced concepts such as lateral load resistance, moment distribution, and deflection control. Detailed structural drawings and specifications were prepared based on the analysis results. The project demonstrates proficiency in structural analysis software, understanding of structural behavior, and application of engineering principles to real-world design challenges.',
      images: [
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: '5',
      title: 'Residential BIM Model',
      category: 'BIM Modeling',
      software: ['Revit'],
      short_description: 'Complete Building Information Modeling (BIM) for residential structures using Revit-Structural.',
      long_description: 'An advanced Building Information Modeling (BIM) project created using Autodesk Revit, focusing on a modern residential complex. The project involved creating a comprehensive 3D model that integrates architectural, structural, and MEP (Mechanical, Electrical, Plumbing) systems. The BIM model includes detailed family components, material specifications, and parametric relationships that allow for automatic updates when design changes are made. Advanced features such as clash detection, quantity takeoffs, and construction sequencing were implemented. The model serves as a central repository of building information that can be used throughout the project lifecycle from design through construction and facility management. This project demonstrates expertise in BIM methodology, collaborative design processes, and advanced Revit functionality.',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: '6',
      title: 'Bridge Design & Analysis',
      category: 'Structural Analysis',
      software: ['STAAD.Pro', 'AutoCAD'],
      short_description: 'Complete bridge design including structural analysis, load calculations, and detailed drawings.',
      long_description: 'A comprehensive bridge engineering project that involved the complete design and analysis of a reinforced concrete bridge structure. The project included preliminary design based on site conditions and traffic requirements, detailed structural analysis using STAAD.Pro for various load combinations including vehicular loads, pedestrian loads, and environmental factors. Advanced concepts such as influence lines, moving load analysis, and dynamic effects were considered. The design process incorporated seismic design principles and followed relevant bridge design codes. Detailed construction drawings were prepared using AutoCAD, including plans, elevations, sections, and reinforcement details. The project also included foundation design considering soil conditions and construction methodology recommendations.',
      images: [
        'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const selectedProject = projects.find(project => project.id === selectedProjectId);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
  };

  // Auto-sliding carousel component for project cards
  const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % project.images.length
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }, [project.images.length]);

    return (
      <div 
        onClick={() => handleProjectClick(project.id)}
        className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
      >
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <div className="relative w-full h-48">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.short_description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.software.map((soft) => (
            <span key={soft} className="px-2 py-1 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded text-teal-300 text-xs">
              {soft}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
          <ExternalLink size={16} className="mr-2" />
          <span className="text-sm font-medium">Click to view details</span>
        </div>
      </div>
    );
  };

  // Conditional rendering based on selectedProjectId
  if (selectedProject) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToProjects} 
          />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and design work across various civil engineering software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;