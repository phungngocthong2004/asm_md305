import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextInputCompunent = props => {
  return (
    <TextInput
      {...props}
      style={st.txtInput}
      placeholderTextColor={props.placeholderTextColor || 'bule'}
    />
  );
};

export default TextInputCompunent;

const st = StyleSheet.create({
  txtInput: {
    borderRadius: 10,
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom:15
  },
});
