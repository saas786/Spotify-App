import React, { Component } from 'react';
import './reset.css';
import './Basic.css';

import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import Playlist from './components/Playlist.js';
import Spotify from './components/Spotify.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
            playlistName: '',
            playlistTracks: []
        }
    }

    spotifySearch = (term) => {
        Spotify.search(term)
        .then(searchResults => {
            this.setState({
                searchResults: searchResults
            })
        });
    };

    addTrack = (track) => {
        // if(this.track.id in this.state.playlistTracks){
        //     return
        // }
        this.setState({
            playlistTracks: track
        })
    };

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar spotifySearch={this.spotifySearch}/>
            {/* search box */}
            {/* search button */}

        <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()}/>
                {/* results */}
                {/* can add to personal list */}
            <Playlist defaultValue={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        {/* personal playlist */}
            {/* rename list */}
            {/* minus from list */}
            {/* final save playlist to spotify */}
        </div>

      </div>
    );
  }
}

export default App;
