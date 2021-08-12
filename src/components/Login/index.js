import { TextInput, StyleSheet, View, Text, Alert, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import styles from './styles';
import logo from "../../img/logo.png";
import DropDownPicker from 'react-native-dropdown-picker';

// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
 
const Login = () => {
 
  const [logined, setLogined] = useState(false);
  const [userId, setUserId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('82');
  const [items, setItems] = useState([
    

    // 1     미국, 캐나다    7    러시아    33    프랑스    34    스페인    44    영국    49    독일    61    호주    63    필리핀    64    뉴질랜드    65    싱가포르    66    태국    
    // 81    일본    82    대한민국    84    베트남    86    중국    852    홍콩    886    대만    91    인도    971    아랍에미리트
    
    {label: '+82', value: '82'},
    {label: '+1', value: '1'},
    {label: '+7', value: '7'},
    {label: '+33', value: '33'},
    {label: '+34', value: '34'},
    {label: '+44', value: '44'},
    {label: '+49', value: '49'},
    {label: '+61', value: '61'},
    {label: '+63', value: '63'},
    {label: '+64', value: '64'},
    {label: '+65', value: '65'},
    {label: '+66', value: '66'},
    {label: '+81', value: '81'},
    {label: '+84', value: '84'},
    {label: '+86', value: '86'},
    {label: '+852', value: '852'},
    {label: '+886', value: '886'},
    {label: '+91', value: '91'},
    {label: '+971', value: '971'},
  ]);


  const navigation = useNavigation();

  const onPlayLoginPress = () => {
    setLogined(!logined);

    // console.log("Login > userId : " + userId);
    console.log("Login > phoneNo : " + phoneNo);
    console.log("isLogin : " + logined);
    
    navigation.navigate("Home", { isLogin: logined });
    
  };

  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={{width: 120, height: 30}}/>
      <View style={styles.subContainer}>
        <View style={styles.inputArea}>
          <View>
            <DropDownPicker style={styles.dropdown}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            maxHeight={250}
                            listMode="FLATLIST"
                          />
          </View>
          <View>
            <TextInput style={styles.textInput}
              onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
              value={phoneNo}
              keyboardType={'phone-pad'}
              placeholder="휴대폰 번호"
            />
            {/* <TextInput style={styles.textInput}
              onChangeText={(userId) => setUserId(userId)}
              value={userId}
              placeholder="Enter ID"
            />
            <TextInput style={styles.textInput}
              password={true}
              secureTextEntry={true}
              placeholder="Enter Password"
            /> */}
          </View>
        </View>
        <View  style={{zIndex: 9}} >
          <Button color="darkorange" title="Login" onPress = {onPlayLoginPress}/>
        </View>
      </View>
        {/* <Text>Whofa : Your id is "{userId}"</Text> */}
        <Text>Whofa : Your phoneNo is "{phoneNo}"</Text>
    </View>

  );
}

export default Login;