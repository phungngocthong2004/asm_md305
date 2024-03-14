import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  ImageBackground,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';

import {Alert} from 'react-native';
import TextInputCompunent from '../Compunent/TextInputCompunent';
import MyButton from '../Compunent/MyButton';

const Login = () => {
  const navigation = useNavigation();
  const [usename, setusename] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!setShowPassword);
  // };
  //   <TextInput
  //   style={{
  //     height: 48,
  //     borderWidth: 1,
  //     borderRadius: 10,
  //     marginBottom: 20,
  //     width: '100%',
  //   }}
  //   secureTextEntry={showPassword}
  //   placeholder="Nhập PassWord: "
  //   onChangeText={pass => setpassword(pass)}
  // />
  // const dangnhap = async () => {
  //   try {
  //     const check = true;
  //     if (usename.length < 6) {
  //       Alert.alert('Username phải lớn hon 6 ky tự');
  //       check = false;
  //     }
  //     if (password.length < 5) {
  //       Alert.alert('PassWord Phải lớn hơn 5 ký tự');
  //       check = false;
  //     }
  //     const response = await axios.get('http://192.168.0.110:3000/users'); //error
  //     const users = response.data;
  //     const foundUser = users.find(
  //       user => user.username === usename && user.password === password,
  //     );

  //     if (foundUser) {
  //       navigation.navigate('Bottomnavication');
  //       ToastAndroid.show('Đăng Nhập Thành Công', ToastAndroid.SHORT);
  //     } else {
  //       ToastAndroid.show('Đăng Nhập Thất Bại', ToastAndroid.SHORT);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // <TouchableOpacity
  //     onPress={togglePasswordVisibility}
  //     style={{position: 'absolute', left: 310, bottom: 32}}>
  //     {showPassword ? (
  //       <Text>
  //         <Icon name="eye" size={24} color={'black'} />
  //       </Text>
  //     ) : (
  //       <Text>
  //         <Icon
  //           name="eye-slash"
  //           size={24}
  //           color={'black'}
  //           onPress={() => setShowPassword(true)}
  //         />
  //       </Text>
  //     )}
  //   </TouchableOpacity>
  return (
    <View style={st.container}>
      <Image
        style={{
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 100,
        }}
        source={require('../src/img/iphone.png')}></Image>
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
        Username <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
      </Text>
      <TextInputCompunent    
        onChangeText={name => setusename(name)}
        placeholder="Nhập Username: "
      />
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
        Password <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInputCompunent
        placeholder="Nhập PassWord: "
        onChangeText={pass => setpassword(pass)}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}></View>
      <View style={st.sumremem}>
        <View style={st.viewRemem}>
          <BouncyCheckbox fillColor="#DAA520" />
          <Text style={st.chu}>Remember me?</Text>
          <Text></Text>
        </View>

        <Text style={st.fogot}>Forgot the password?</Text>
      </View>
      <MyButton
        onPress={() => navigation.navigate('Bottom')}
        >
        <Text style={st.textLogin}>Login</Text>
      </MyButton>
      <Text style={st.textconteniu}> or continue with</Text>
      <View style={st.ggf}>
        <Pressable style={st.btnface}>
          <Image style={st.imgsocial} source={require('./img/f.png')} />
          <Text>Facebook</Text>
        </Pressable>
        <Pressable style={st.btnface}>
          <Image style={st.imgsocial} source={require('./img/gg.png')} />
          <Text>Google</Text>
        </Pressable>
      </View>

      <Text style={st.textSingup} onPress={() => navigation.navigate('SignUp')}>
        don’t have an account ?
        <Text style={{fontWeight: 'bold', color: '#DAA520'}}> Sign Up</Text>{' '}
      </Text>
    </View>
  );
};

export default Login;

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#050505',
  },
  welcometext: {
    fontFamily: 'Popins',
    fontSize: 20,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 40,
  },
  usename: {
    fontSize: 10,
  },
  textinput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  viewRemem: {
    flexDirection: 'row',
  },
  chu: {
    marginTop: 2,
    fontWeight: 'bold',
  },
  sumremem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fogot: {
    fontWeight: 'bold',
    color: '#DAA520',
  },
  buttonLogin: {
    marginTop: 30,
    height: 48,
    backgroundColor: '#DAA520',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: '#ffff',
    fontSize: 20,
  },
  textconteniu: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  imgsocial: {
    width: 21,
    height: 21,
    marginHorizontal: 5,
  },
  btnface: {
    flexDirection: 'row',
    width: 170,
    borderWidth: 1,
    borderColor: '#DAA520',
    height: 48,
    backgroundColor: '#EEF1F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ggf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSingup: {
    textAlign: 'center',
    marginTop: 20,
  },
});
