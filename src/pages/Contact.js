// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function Contact() {
  return (
    <Container>
      <Title>Contact Me</Title>
      <ContactForm />
    </Container>
  );
}

export default Contact;
