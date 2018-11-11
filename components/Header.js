import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, Icon, Rail, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../makeup/logo.png';

const staticSize = (width, height) => `width: ${width};
height: ${height};
max-width: ${width};
max-height: ${height};
min-width: ${width};
min-height: ${height};`;

const Logo = styled.div`
  img {
    ${staticSize('130px', '42px')}
     margin-bottom: 5px;
    right: 0;
    position: absolute;
  }
`;
export default class extends Component {
  state = { isOpen: false };

  onToggleHamburger = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  componentDidUpdate(prevProps) {
    if (this.props.windowWidth !== prevProps.windowWidth) {
      this.setState({ isOpen: false });
    }
  }
  render() {
    const { setType = type => console.log(type) } = this.props;
    return (
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
            <Dropdown item icon="bars" simple>
              <Dropdown.Menu>
                <Link to="/">
                  <Dropdown.Item>Home</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Icon name="dropdown" />
                  <span className="text">Face</span>
                  <Dropdown.Menu>
                    <Link to="/foundation">
                      <Dropdown.Item onClick={() => setType('foundation')}>
                        Foundation
                      </Dropdown.Item>
                    </Link>
                    <Link to="/blush">
                      <Dropdown.Item onClick={() => setType('blush')}>Blush</Dropdown.Item>
                    </Link>
                    <Link to="/bronzer">
                      <Dropdown.Item onClick={() => setType('bronzer')}>Bronzer</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Icon name="dropdown" />
                  <span className="text">Eyes</span>
                  <Dropdown.Menu>
                    <Link to="/eyeliner">
                      <Dropdown.Item onClick={() => setType('eyeliner')}>Eye Liner</Dropdown.Item>
                    </Link>
                    <Link to="/eyeshadow">
                      <Dropdown.Item onClick={() => setType('eyeshadow')}>Eye Shadow</Dropdown.Item>
                    </Link>
                    <Link to="/mascara">
                      <Dropdown.Item onClick={() => setType('mascara')}>Mascara</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Icon name="dropdown" />
                  <span className="text">Lips</span>
                  <Dropdown.Menu>
                    <Link to="/lip_liner">
                      <Dropdown.Item onClick={() => setType('lip_liner')}>Lip Liner</Dropdown.Item>
                    </Link>
                    <Link to="/lipstick">
                      <Dropdown.Item onClick={() => setType('lipstick')}>Lipstick</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Link to="/nail_polish">
                  <Dropdown.Item onClick={() => setType('nail_polish')}>Nail Polish</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Logo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Logo>
          </Menu>
        </Sticky>
      </Rail>
    );
  }
}
