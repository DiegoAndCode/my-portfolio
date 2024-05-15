// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
`;

function About() {
  return (
    <Container>
      <Title>About Me</Title>
      <Paragraph>This is the about page.</Paragraph>
    </Container>
  );
}

export default About;
