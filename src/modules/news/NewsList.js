// list berita top headline dari indonesia
// https://newsapi.org/v2/top-headlines?country=id&apiKey=API_KEY
// bikin komponen kayak sourcelist tadi
// yang di tampilkan
// 1. title
// 2. publishedAt
// 3. description
// 4. author

import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import PropTypes from "prop-types";
import axios from "axios";

const key = "988f3ffaa6044a0bb31c0eb721ff57d1";
const sources = `https://newsapi.org/v2/everything?apiKey=${key}`;
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      sourceId: this.props.match.params.id
    };
  }

  componentDidMount() {
    const { sourceId } = this.state;
    axios
      .get(`${sources}&sources=${sourceId}`)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data: result.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error, sourceId } = this.state;
    console.log(sourceId);

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map((article, index) => {
          return (
            <Card key={index}>
              <Image
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : `${dariSemantic}/images/avatar/large/matthew.png`
                }
              />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Meta>
                  <span className="date">{article.publishedAt}</span>
                </Card.Meta>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

NewsList.propTypes = {
  match: PropTypes.object
};

export default NewsList;
