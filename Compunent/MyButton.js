import React, {forwardRef} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = forwardRef(({children, style, onPress}, ref) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      ref={ref}
      style={[styles.button, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DAA520',
    padding: 10,  
    width:"100%",
    marginTop:20,
    borderRadius: 10,
  },
  text: {
    color: 'yellow',
    textAlign: 'center',
  },
});

export default MyButton;
