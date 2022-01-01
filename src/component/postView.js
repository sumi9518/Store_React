import React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {

  const rendertopic = ({ topicdata }) => {
    if (topicdata) {
      return topicdata.map((item) => {
        return (
          <div key={item.id}>
                <h2>{item.title}</h2>
                <Link className="btn btn-info" to={`/post/${item.id}`}>Details</Link>
          </div>
        );
      });
    }
};
return <div>{rendertopic(props)}</div>;
};

export default PostView;
