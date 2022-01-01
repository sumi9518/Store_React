import React, { Component } from "react";
import PostView from "./postView";

const url = "http://localhost:8900/posts";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      topics: "",
    };
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ topics: data });
      });
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <div className="panel panel-success">
          <div className="panel-heading">Posts Heading</div>
          <div className="panel-body">
            <div className="jumbotron">
              <PostView topicdata={this.state.topics} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
