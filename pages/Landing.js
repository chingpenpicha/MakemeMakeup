import React, { Component } from 'react';
import Menu from '../components/Menu';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass';

import homeImage from '../makeup/home3.jpg';
import logo from '../makeup/logo.png';
import faceImage from '../makeup/face.jpg';
import eyeImage from '../makeup/eye.jpg';
import lipImage from '../makeup/lip.jpg';
import nailImage from '../makeup/nail_polish.jpg';

const FlexContentCenter = styled(Flex)`
  align-content: space-between;
  height: 650px;
`;

const FullDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: noRepeat;
`;

const LinkButton = ({ text, path, color }) => (
  <Link to={path}>
    <Button animated basic size="huge" color={color}>
      <Button.Content visible>{text} </Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" /> Find out
      </Button.Content>
    </Button>
  </Link>
);
class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Element name="home">
          <Flex
            style={{
              width: '100vw',
              height: '100vh',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingTop: '50px',
              backgroundImage: `url(${homeImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat',
              flexWrap: 'wrap',
            }}
          >
            <Flex mb={4} width={1} justifyContent="center" flexWrap="wrap">
              <Box style={{ backgroundColor: 'rgba(255, 255, 255, .7)' }}>
                <img src={logo} alt={logo} />
              </Box>
              <Flex width={1} mt={3} justifyContent="center">
                <Text fontSize={3} mb={3} fontWeight="bold" color="white">
                  Wake up & Make up
                </Text>
              </Flex>
              <Flex width={1} mb={3} justifyContent="center">
                <Icon name="angle double down" color="grey" size="huge" />
              </Flex>
            </Flex>
          </Flex>
        </Element>
        <Element name="face">
          <FullDiv
            style={{
              backgroundImage: `url(${faceImage})`,
            }}
          >
            <FlexContentCenter pt={100} justifyContent="space-between" flexDirection="column">
              <Flex width={1} justifyContent="center">
                <Box width={1 / 2} />
                <LinkButton path="/foundation" text="Foundation" />
              </Flex>
              <Flex width={1} justifyContent="flex-start">
                <Box width={1 / 8} />
                <LinkButton path="/blush" text="Blush" color="pink" />
              </Flex>
              <Flex width={1} justifyContent="center">
                <Box width={1 / 2} />
                <LinkButton path="/bronzer" text="Bronzer" color="brown" />
              </Flex>
            </FlexContentCenter>
          </FullDiv>
        </Element>
        <Element name="eyes">
          <FullDiv style={{ backgroundImage: `url(${eyeImage})` }}>
            <FlexContentCenter pt={100} justifyContent="space-between" flexDirection="column">
              <Flex width={1} justifyContent="flex-start">
                <Box width={1 / 8} />
                <LinkButton path="/eyeliner" text="Eye liner" />
              </Flex>
              <Flex width={1} justifyContent="center">
                <Box width={1 / 3} />
                <LinkButton path="/eyeshadow" text="Eye shadow" color="teal" />
              </Flex>
              <Flex width={1} justifyContent="flex-start">
                <Box width={1 / 8} />
                <LinkButton path="/mascara" text=" Mascara " color="black" />
              </Flex>
            </FlexContentCenter>
          </FullDiv>
        </Element>
        <Element name="lips">
          <FullDiv style={{ backgroundImage: `url(${lipImage})` }}>
            <FlexContentCenter pt={130} justifyContent="space-between" flexWrap="wrap">
              <Flex width={1} justifyContent="flex-start">
                <Box width={1 / 8} />
                <LinkButton path="/lip_liner" text=" Lip liner " color="orange" />
              </Flex>
              <Flex width={1} justifyContent="flex-start">
                <Box width={1 / 8} />
                <LinkButton path="/lipstick" text="Lip stick" color="red" />
              </Flex>
            </FlexContentCenter>
          </FullDiv>
        </Element>
        <Element name="nail">
          <FullDiv style={{ backgroundImage: `url(${nailImage})` }}>
            <FlexContentCenter pt={50} justifyContent="center" alignItems="center">
              <LinkButton path="/nail_polish" text=" Nail Polish" color="black" />
            </FlexContentCenter>
          </FullDiv>
        </Element>
      </div>
    );
  }
}

export default LandingPage;
