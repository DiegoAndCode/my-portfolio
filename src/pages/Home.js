// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to My Portfolio</Title>
      <Paragraph>This is the home page.</Paragraph>
    </Container>
  );
}

export default Home;
