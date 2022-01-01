import React, { Component } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Posts from "./component/posts";
import Postsdetails from "./component/postsdetails";
import Profile from "./component/profile";
import Forms from "./component/forms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=""
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand">
                    Edureka
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/posts">Posts</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/forms">Forms</Link>
                  </li>
                  <li>
                    <Link to="/postsdetails">Postsdetails</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="/posts" element={<Posts />}></Route>
          <Route  path="/post/:name" element={<Postsdetails />}></Route>
          <Route  path="/forms" element={<Forms />}></Route>
          <Route  path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
