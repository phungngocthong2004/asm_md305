import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const ManHinhChao = () => {
    const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./img/iphone.png')}></Image>
    </View>
  );
};

export default ManHinhChao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:"white"
  },
  logo: {
    width: 300,
    height: 200,
    marginTop: 245,
    marginLeft: 50,
  },
});
