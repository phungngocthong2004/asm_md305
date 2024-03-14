import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';

  import {ToastAndroid} from 'react-native';
  import {useNavigation} from '@react-navigation/native';
  import {Alert} from 'react-native';
import MyButton from '../Compunent/MyButton';
import TextInputCompunent from '../Compunent/TextInputCompunent';
  const SinUp = ({props}) => {
    const navigation = useNavigation();
    const [fullname, setfullname] = useState('');
    const [usename, setusename] = useState('');
    const [pass, setpass] = useState('');
    const [phone, setphone] = useState('');
  
    // const dangky = async () => {
    //   try {
    //     const check = true;
    //     if (fullname.length < 5 || fullname == '') {
    //       Alert.alert('fullname phải lớn hon 5 ky tự');
    //       check = false;
    //       return;
    //     }
    //     if (usename.length < 6 || usename == '') {
    //       Alert.alert('Username phải lớn hon 6 ky tự');
    //       check = false;
    //       return;
    //     }
    //     if (pass.length < 5 || pass == '') {
    //       Alert.alert('PassWord Phải lớn hơn 5 ký tự');
    //       check = false; // thoát khỏi hàm nếu dữ liệu không hợp lệ
    //       return;
    //     }
    //     if (phone.length != 10 || phone == '') {
    //       Alert.alert('phone Phải là 10 số');
    //       check = false; // thoát khỏi hàm nếu dữ liệu không hợp lệ
    //       return;
    //     }
    //     const response = await axios.post('http://10.24.20.28:3000/users', {
    //       fullname: fullname,
    //       username: usename,
    //       password: pass,
    //       phone: phone,
    //     });
    //     Alert.alert("Đăng Ký Thành công")
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    return (
      <View style={st.container}>
        <Image style={st.logo} source={require('./img/iphone.png')} />
        <Text style={st.textsignup}>Create an account</Text>
        <Text style={st.login}>Connect with your friends today!</Text>
  
        <Text style={st.texttieude}> Fullname: </Text>
        <TextInputCompunent
          style={st.input}
          placeholder="Nhập Fullname: "
          onChangeText={fullname => setfullname(fullname)}
        />
        <Text style={st.texttieude}> Username: </Text>
        <TextInputCompunent
          style={st.input}
          placeholder="Nhập Username: "
          onChangeText={username => setusename(username)}
        />
        <Text style={st.texttieude}> Password: </Text>
        <TextInputCompunent
          style={st.input}
          placeholder="Nhập Password: "
          onChangeText={pass => setpass(pass)}
        />
  
        <Text style={st.texttieude}> Phone: </Text>
        <TextInputCompunent
          style={st.input}
          placeholder="Nhập Phone: "
          onChangeText={phone => setphone(phone)}
          keyboardType="phone-pad"
        />
        <MyButton>
          <Text style={st.textbtn}>SignUp</Text>
        </MyButton>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={st.textlogin}>
            Already have an account ?
            <Text style={{fontWeight: 'bold', color: '#DAA520'}}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SinUp;
  
  const st = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: 'white',
    },
    logo: {
      width: 140,
      height: 100,
      marginLeft: 100,
    },
    textsignup: {
      fontFamily: 'Popins',
      fontSize: 25,
      color: '#050505',
      fontWeight: 'bold',
    },
    input: {
      height: 48,
      borderWidth: 2,
      borderColor: '#050505',
      borderRadius: 10,
    },
    texttieude: {
      fontFamily: 'Popins',
      fontWeight: 'bold',
      marginBottom: 2,
      color: '#050505',
      marginTop: 10,
    },
    login: {
      marginBottom: 10,
    },
    btnsignup: {
      marginTop: 20,
      height: 48,
      backgroundColor: '#DAA520',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textbtn: {
      color: '#ffff',
      fontSize: 20,
    },
    textlogin: {
      textAlign: 'center',
      marginTop: 20,
      color: '#050505',
    },
  });
  