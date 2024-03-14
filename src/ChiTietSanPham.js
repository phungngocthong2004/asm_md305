import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const ChiTietSanPham = ({route}) => {
  const navigation = useNavigation();
  const [arrChoose, setChoose] = useState([0]);
  const [totalPrice, setTotalPrice] = useState(0);
  //   useEffect(() => {
  //     let sum = 0;
  //     for (let i = 0; i < arrChoose.length; i++) {
  //       const prices = route.params.item.sizeOrder[arrChoose[i]];
  //       sum += prices.price;
  //     }
  //     setTotalPrice(sum);
  //   }, [arrChoose]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'grey',
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{flex: 6}}
          source={{
            uri: route.params.item.uri,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: 10,
                  backgroundColor: '#21262E',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    borderRadius: 10,
                    backgroundColor: '#21262E',
                    color: '#AEAEAE',
                  }}>
                  {'<'}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: 33,
                height: 33,
                backgroundColor: '#21262E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('./img/heart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: ' rgba(0, 0, 0, 0.5)',
              width: '100%',
              height: 133,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
            }}>
            {/**View 2 */}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                    }}>
                    {route.params.item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#AEAEAE',
                      marginLeft: 3,
                    }}>
                    {route.params.item.spice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginEnd: 20,
                    justifyContent: 'space-between',
                  }}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
                  <Text style={{fontSize: 15}}>⭐</Text>
                  <Text style={{fontSize: 15, color: 'white', fontWeight: 600}}>
                    {' '}
                    {route.params.item.star} {'(6124)'}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#141921',
                      width: 118,
                      height: 40,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginEnd: 30,
                      marginBottom: 20,
                    }}>
                    <Text style={{color: '#AEAEAE', fontSize: 10}}>
                      Medium Roasted
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 4,
            flexDirection: 'column',
            backgroundColor: '#0C0F14',
          }}>
          <Text
            style={{
              color: '#AEAEAE',
              marginLeft: 20,
              fontSize: 20,
              fontWeight: '700',
              marginTop: 10,
            }}>
            Description
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              color: '#AEAEAE',
              marginTop: 10,
            }}>
            {route.params.item.mota}
          </Text>
          <Text
            style={{
              color: '#AEAEAE',
              marginLeft: 20,
              marginTop: 10,
              fontSize: 20,
              fontWeight: 700,
            }}>
            Bản Ghi
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text style={{color: '#D17842', fontSize: 15}}>{item.size}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: '#D17842', fontSize: 15}}>{item.size}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: '#D17842', fontSize: 15}}>{item.size}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 10,
              }}>
              <Text style={{color: '#AEAEAE', marginLeft: 30}}> Price</Text>
              <Text
                style={{
                  color: '#AEAEAE',
                  marginLeft: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#D17842',
                }}>
                $ <Text style={{color: 'white'}}>{item.price}</Text>
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 240,
                  height: 60,
                  backgroundColor: '#D17842',
                  borderRadius: 20,
                  marginHorizontal: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  input: {
    width: 100,
    height: 40,
    backgroundColor: '#AEAEAE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  inputChoose: {
    borderColor: 'red',
  },
});
export default ChiTietSanPham;
