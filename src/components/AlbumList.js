import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        this.setState({albums: res.data});
      })
      .catch((err) => {
        return err;
      });
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.id} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
