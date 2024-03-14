// Banner.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const MyBanner = ({ imageUrl }) => {
  return <Image source={{uri:imageUrl}} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    height: 200,
 
  },
});

export default MyBanner;