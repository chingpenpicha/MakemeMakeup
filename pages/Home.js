import React, { Component } from 'react';
import axios from 'axios';
import { Flex, Text, Box } from 'rebass';
import { Loader, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import captital from '../common/capital';
import Header from '../components/Header';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const FlexLine = styled(Flex)`
  height: 5px;
  background-color: red;
`;

class HomePage extends Component {
  state = { data: [], loading: true };

  componentDidMount() {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${
          this.props.match.params.type
        }`
      )
      .then(res => {
        this.setState({ data: res.data.slice(0, 30) });
        this.setState({ loading: false });
      });
  }

  onSubmit = ({ brand = '', tags = [] }) => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${
          this.props.match.params.type
        }&brand=${brand}&product_tags=${tags}`
      )
      .then(res => {
        this.setState({ data: res.data });
        this.setState({ loading: false });
      });
  };

  onSetType = param => {
    this.setState({ loading: true });
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${param}`)
      .then(res => {
        this.setState({ data: res.data.slice(0, 30) });
        this.setState({ loading: false });
      });
  };
  render() {
    const { data, loading } = this.state;
    const {
      handleSelect,
      match: {
        params: { type },
      },
    } = this.props;

    if (loading)
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    return (
      <Box>
        <Header setType={this.onSetType} />
        <Box pt={50}>
          <Flex width={1} my={[4, 4, 5]} alignItems="center " justifyContent="center">
            <FlexLine width={1 / 5} />
            <Text mx={3} width={1} fontSize={4} color="#222" fontWeight="bold">
              {captital(type)}
            </Text>
            <FlexLine width={1 / 5} />
          </Flex>
          <Flex>
            <SearchBar onSubmit={this.onSubmit} type={type} />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={data == false ? 'center' : 'flex-start'}
            mx={[3, 3, 4, 6]}
            mt={[3, 3, 4]}
            mb={[3, 4]}
            flexWrap="wrap"
          >
            {data == false ? (
              <Text width={1} color="red">
                No Result Found
              </Text>
            ) : (
              data.map((e, idx) => {
                return (
                  <Flex
                    width={[1, 1 / 2, 1 / 3]}
                    justifyContent="center"
                    key={e.name + idx}
                    onClick={() => handleSelect(e)}
                  >
                    <Zoom>
                      <Card
                        title={captital(e.name)}
                        imageUrl={e.image_link}
                        brand={captital(e.brand)}
                        price={e.price}
                        pathname={e.id}
                        type={type}
                      />
                    </Zoom>
                  </Flex>
                );
              })
            )}
          </Flex>
        </Box>
      </Box>
    );
  }
}

export default HomePage;
