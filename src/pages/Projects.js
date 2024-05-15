import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a description for project one.',
      link: 'http://example.com'
    },
    {
      title: 'Project Two',
      description: 'This is a description for project two.',
      link: 'http://example.com'
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
