// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

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
    <Container>
      <Title>My Projects</Title>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Container>
  );
}

export default Projects;
