// Block.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyBlock = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor:'red',
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
  
    marginBottom: 10,
    marginTop:10
  },
});

export default MyBlock;