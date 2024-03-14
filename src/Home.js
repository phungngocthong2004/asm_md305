import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DATA_CATEGORY, DATA_PRODUCT} from '../../Control/data';
import ProductItem from './ProductItem';

import MyBanner from '../Compunent/Mybanner';
import MyBlock from '../Compunent/Myblock';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation();
  const [seach, setseach] = useState('');
  const [pruduct, setpruduct] = useState([]);
  const [pruducthat, setpruducthat] = useState([]);
  const [sanphamdaxem, setsanphamdaxem] = useState([]);
  
  const getApi = async () => {
    try {
      const reponse = await fetch('http://172.20.10.2:3000/products');
      const data = await reponse.json();
      setpruduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getApidaxem = async () => {
    try {
      const reponse = await fetch('http://172.20.10.2:3000/spdaxem');
      const data = await reponse.json();
      setsanphamdaxem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getApihat = async () => {
    try {
      const reponse = await fetch('http://172.20.10.2:3000/sanphamhot');
      const data = await reponse.json();
      setpruducthat(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApihat();
    getApi();
    getApidaxem();
    
  }, []);
  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
          <SafeAreaView style={st.container}>
            <MyBanner
              imageUrl={
                'https://cdn.xtmobile.vn/vnt_upload/news/09_2023/28/hinh-anh-mo-hop-iphone-15-pro-max-titan-tu-nhien-xtmobile.jpg'
              }
            />
            <ScrollView>
            <MyBlock>
              <View style={st.view3}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    marginVertical: 10,
                  }}>
                  Sản Phẩm Bán Chạy
                </Text>
                <FlatList
                  style={{marginTop: 5}}
                  horizontal={true}
                  data={pruduct}
                  renderItem={({item}) => (
                    <ProductItem item={item} navigation={navigation} />
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </MyBlock>
            <MyBlock>
              <View style={st.view4}>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Sản Phẩm Hot
                </Text>
                <FlatList
                  style={{marginTop: 5}}
                  horizontal={true}
                  data={sanphamdaxem}
                  renderItem={({item}) => (
                    <ProductItem item={item} navigation={navigation} />
                  )}
                  keyExtractor={item => item.name}
                />
              </View>
            </MyBlock>
            <MyBlock>
              <View style={st.view5}>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Các Sản Phẩm đã xem
                </Text>
                <FlatList
                style={{marginTop: 5}}
                horizontal={true}
                data={pruducthat}
                renderItem={({item}) => (
                  <ProductItem item={item} navigation={navigation} />
                )}
                keyExtractor={item => item.name}
              />
              </View>
            </MyBlock>
            </ScrollView>
          </SafeAreaView>
       
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  view3: {
    flex: 1,
  },
  view4: {
    flex: 1,
  },
  view5: {
    flex: 0.5, // Flex nhỏ hơn cho "Các Sản Phẩm đã xem"
  },
});
export default Home;
