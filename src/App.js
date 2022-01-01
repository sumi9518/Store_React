import React, {Component} from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Posts from './component/posts';
import Postsdetails from './component/postsdetails';
import Profile from './component/profile';
import Forms from './component/forms'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/postsdetails">Postsdetails</Link>
          </header>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/posts" element={<Posts />}></Route>
          <Route exact path="/forms" element={<Forms />}></Route>
          <Route exact path="/postsdetails" element={<Postsdetails />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
