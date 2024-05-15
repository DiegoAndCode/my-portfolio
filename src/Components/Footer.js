// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Portfolio</p>
    </FooterContainer>
  );
}

export default Footer;
