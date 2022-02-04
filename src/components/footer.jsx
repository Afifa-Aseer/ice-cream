import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>PRODUCT</Heading>
          </Column>
          <Column>
            <Heading>OUR STORIES</Heading>
          </Column>
          <Column>
            <Heading>FLAVORS</Heading>
          </Column>
          <Column>
            <Heading>LOCATION</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;