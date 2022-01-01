import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div>
      <h2>Posts</h2>
      <div class="panel panel-success">
        <div class="panel-heading">Posts Heading</div>
        <div class="panel-body">
          <div className="jumbotron">
            <h2>Javascript</h2>
            <Link className="btn btn-info" to="/post/javascript">
              Details
            </Link>
            <h2>NodeJS</h2>
            <Link className="btn btn-info" to="/post/nodejs">
              Details
            </Link>
            <h2>MongoDB</h2>
            <Link className="btn btn-info" to="/post/mongodb">
              Details
            </Link>
            <h2>ExpressJS</h2>
            <Link className="btn btn-info" to="/post/expressjs">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
