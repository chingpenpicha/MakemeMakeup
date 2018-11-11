import React from 'react';
import styled from 'styled-components';
import { Box, Text, Flex } from 'rebass';
import { Link } from 'react-router-dom';

const FixedBox = styled(Box)`
  overflow: hidden;
  height: 350px;
  background-color: #fff;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #ddd;
  }
`;

const FixedFlex = styled(Flex)`
  height: 100px;
  justify-content: center;
`;

export default class Card extends React.Component {
  render() {
    const { imageUrl, title, brand, price, pathname, type } = this.props;
    return (
      <Box>
        <Link to={`/${type}/${pathname}`}>
          <FixedBox width={280} mx={[3, 4, 5]} my={[3, 4]} p={0}>
            <img src={imageUrl} height="250px" width="280px" alt={title} />
            <FixedFlex flexDirection="column">
              <Text mx={3} width={1} fontSize={3} color="#222" fontWeight="bold">
                {brand}
              </Text>
              <Text mx={3} width={1} fontSize={1} color="#888">
                {title}
              </Text>
              <Text mx={3} width={1} fontSize={1} color="#888">
                $ {price}
              </Text>
            </FixedFlex>
          </FixedBox>
        </Link>
      </Box>
    );
  }
}
