import { StyleSheet, Dimensions, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    // margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownWrap: {
    marginTop: 60, 
    height: 50,
    zIndex: 100,
  },
  dropdown: {
    // backgroundColor: 'pink',

    // 콤보박스스탈
    // height: 20,
    // marginTop: 50,
    // marginBottom: 3,
    // borderColor: 'gray',    

    // 넷플릭스스탈
    height: 15,
    width: 90,
    marginTop: 30,
    marginLeft: 160,
    borderWidth: 0, 
    backgroundColor: '#f3f3f3',
  },
  dropdownOpen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - (Platform.OS === 'ios' ? 126 : 114),
    opacity: 0.8,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dropdownClose: {
    width: Dimensions.get('window').width,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // height: Dimensions.get('window').height - 114,
    // opacity: 0.9,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
});

export default styles;
