import React, { Component } from 'react';
import { Menu, Rail, Sticky } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import logo from '../makeup/logo.png';

const staticSize = (width, height) => `width: ${width};
height: ${height};
max-width: ${width};
max-height: ${height};
min-width: ${width};
min-height: ${height};`;

const ScrollLink = ({ path, text, duration }) => {
  return (
    <Link
      activeClass="active"
      className="item"
      to={path}
      spy={true}
      smooth={true}
      duration={duration}
    >
      {text}
    </Link>
  );
};

const Logo = styled.div`
  img {
    ${staticSize('130px', '42px')}
     margin-bottom: 5px;
    right: 0;
    position: absolute;
  }
`;
export default class MenuExampleSecondaryPointing extends Component {
  render() {
    return (
      <div>
        <Rail
          internal
          position="left"
          attached
          style={{ top: 'auto', height: 'auto', width: '100%' }}
        >
          <Sticky>
            <Menu
              pointing
              secondary
              color="red"
              size="large"
              style={{ position: 'fixed', width: '100%', backgroundColor: 'white' }}
            >
              <ScrollLink path="home" duration={200} text="Home" />
              <ScrollLink path="face" duration={400} text="Face" />
              <ScrollLink path="eyes" duration={800} text="Eyes" />
              <ScrollLink path="lips" duration={1000} text="Lips" />
              <ScrollLink path="nail" duration={1200} text="Nail" />
              <Logo>
                <img src={logo} alt={logo} />
              </Logo>
            </Menu>
          </Sticky>
        </Rail>
      </div>
    );
  }
}
