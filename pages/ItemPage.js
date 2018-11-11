import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Label, Embed, List, Image, Icon } from 'semantic-ui-react';
import { Flex, Box, Text } from 'rebass';

import Header from '../components/Header';
import { API_KEY } from '../common/key';
import capital from '../common/capital';

const ClickableDiv = styled.div`
  .item {
    cursor: pointer;
  }
`;

const ColorCircle = styled(Box)`
  background-color: ${props => props.color};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FlexAlignCenter = styled(Flex)`
  align-content: center;
`;

const FlexLine = styled(Flex)`
  height: 2px;
  background-color: red;
`;

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <Icon loading name="spinner" />
        Loading....
      </div>
    );
  }
  const videoId = video.id.videoId;
  const imgSrc = video.snippet.thumbnails.default.url;
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <Embed id={videoId} placeholder={imgSrc} source="youtube" />
      </div>
      <div className="details">
        <Text fontWeight="bold" my={2} color="red">
          <Icon name="play" />
          {video.snippet.title}
        </Text>
        <Text my={1}>{video.snippet.description}</Text>
      </div>
    </div>
  );
};
const VideoListItem = ({ video, onVideoSelect }) => {
  const imgSrc = video.snippet.thumbnails.default.url;
  return (
    <List.Item onClick={() => onVideoSelect(video)}>
      <Image avatar src={imgSrc} />
      <List.Content>
        <List.Header>{video.snippet.title}</List.Header>
      </List.Content>
    </List.Item>
  );
};

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ClickableDiv>
      <List animated verticalAlign="middle">
        {videos.map(video => (
          <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect} />
        ))}
      </List>
    </ClickableDiv>
  );
};

const TextField = ({ label, item }) => {
  return (
    <Box width={1} ml={2}>
      <Text fontWeight="bold" mb={2}>
        {label}
      </Text>
      <Text ml={2} mb={3}>
        {item}
      </Text>
    </Box>
  );
};
class RecipePage extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    if (Object.keys(this.props.data).length == 0) return <Redirect to="/" />;
    this.videoSearch();
  }

  videoSearch() {
    const { data } = this.props;
    const term = `${data.name} ${data.brand}`;
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  render() {
    const { match, data } = this.props;
    if (Object.keys(data).length == 0) return <Redirect to="/" />;
    return (
      <Box>
        <Header />
        <Box pt={50}>
          <Flex flexWrap="wrap" mt={4}>
            <Flex width={1} my={3} justifyContent="center">
              <Text mx={2}>
                <Link to={`/${match.params.type}`}>
                  {`< Back to `}
                  {capital(data.product_type)}
                </Link>
              </Text>
              <Box width={[0, 2 / 3]} />
            </Flex>

            <Flex flexWrap="wrap">
              <Flex my={4} width={[1, 1 / 2]} justifyContent="center">
                <img src={data.image_link} height="300px" width="330px" alt={data.name} />
              </Flex>
              <FlexAlignCenter
                flexWrap="wrap"
                width={[1, 2 / 5]}
                mx={[4, 0]}
                alignItems="flex-end"
                justifyContent="flex-start"
              >
                <Box width={1}>
                  <Text fontSize={3} my={1} fontWeight="bold">
                    {capital(data.name)}
                  </Text>
                </Box>
                <FlexLine width={4 / 5} my={3} />
                <TextField label="Brand" item={capital(data.brand)} />
                <TextField label="Price" item={`$ ${capital(data.price)}`} />
                <TextField
                  label="Tags"
                  item={
                    data.tag_list &&
                    data.tag_list.map((e, idx) => (
                      <Label tag key={e + idx}>
                        {capital(e)}
                      </Label>
                    ))
                  }
                />
                <TextField
                  label="Colors"
                  item={
                    <Flex flexWrap="wrap">
                      {data.product_colors &&
                        data.product_colors.map((e, idx) => (
                          <Flex mr={3} key={e.colour_name + idx}>
                            <ColorCircle color={e.hex_value} />
                            {e.colour_name}
                          </Flex>
                        ))}
                    </Flex>
                  }
                />
              </FlexAlignCenter>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center" width={1} mt={2}>
            <Flex flexWrap="wrap" justifyContent="flex-start" width={[9 / 10, 4 / 5]}>
              <Flex width={1} justifyContent="center">
                <TextField label="Description" item={data.description} />
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="flex-start" mt={4} width={[9 / 10, 4 / 5]}>
              <Flex width={1} justifyContent="center">
                <TextField label="Video" />
                <Box width={[0, 1 / 2]} />
              </Flex>
              <Box>
                <VideoDetail video={this.state.selectedVideo} />
              </Box>
              <Box width={1} mb={2} mt={3}>
                <Text fontWeight="bold">
                  <Icon name="youtube play" />
                  Find more videos ..
                </Text>
              </Box>
              <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos}
              />
            </Flex>
          </Flex>
          <Box mt={3} width={1} style={{ height: '40px' }} />
        </Box>
      </Box>
    );
  }
}

export default RecipePage;
