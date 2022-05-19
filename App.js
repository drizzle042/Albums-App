import React from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <>
      <Header headerText="Albums" />
      <AlbumList />
    </>
  );
};

export default App;
