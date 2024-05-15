// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  margin: 0 0 1rem 0;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function ProjectCard({ title, description, link }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
    </Card>
  );
}

export default ProjectCard;
