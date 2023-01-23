import React from 'react';
import "../src/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./container/Search";
import Favourites from './container/Favourites';
import Sidebar from './components/Sidebar';
import Playlist from './container/Playlist';
import Main from './container/Home';




function App() {
  return (
    <>
      <Router>
      <Sidebar/>
        <Route path="/" component={Main} exact />
        <Route path="/search" component={Search} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/playlists" component={Playlist}/>
      </Router>
    </>
  );
}

export default App;