import React, { Component } from 'react';
import { Flex, Text, Box } from 'rebass';
import { Dropdown, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import brandOptions from '../common/brand_list';
import tagOptions from '../common/tags';

const RedBorderFlex = styled(Flex)`
  border: 2px solid red;
  border-radius: 10px;
`;

class SearchBar extends Component {
  state = { brand: '', tags: [] };

  render() {
    const { onSubmit, type } = this.props;
    return (
      <Flex justifyContent="center" width={1} my={1}>
        <Box width={4 / 5}>
          <Box width={1} my={2}>
            <Text mx={3} fontSize={3} color="#222" fontWeight="bold">
              Search
            </Text>
          </Box>
          <RedBorderFlex
            alignItems="flex-start"
            justifyContent="center"
            mb={[3, 4]}
            width={1}
            flexWrap="wrap"
            py={3}
          >
            <Box width={[1, 1 / 3, 1 / 4]} mx={2} my={1}>
              <label>Brand</label>
              <Dropdown
                placeholder="Brand..."
                fluid
                search
                selection
                options={brandOptions}
                onChange={(e, d) => this.setState({ brand: d.value })}
              />
            </Box>
            <Box width={[1, 1 / 2]} mx={2} my={1}>
              <label>Tag</label>
              <Dropdown
                placeholder="Tags"
                fluid
                search
                selection
                multiple
                onChange={(e, d) => this.setState({ tags: d.value })}
                options={tagOptions[type]}
              />
            </Box>
            <Box width={[1, 4 / 5, 1 / 7]} mx={2} mt={23} mb={1}>
              <Button onClick={() => onSubmit(this.state)} color="red">
                <Flex>
                  <Icon name="search" />
                  Search
                </Flex>
              </Button>
            </Box>
          </RedBorderFlex>
        </Box>
      </Flex>
    );
  }
}

export default SearchBar;
