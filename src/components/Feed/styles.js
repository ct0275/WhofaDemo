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
    ...Platform.select({
      ios: {
        zIndex: 2,
      },
      android: {

      }
    }),
  },
  dropdown: {
    // backgroundColor: 'pink',

    // 콤보박스스탈
    // height: 20,
    // marginTop: 50,
    // marginBottom: 3,
    // borderColor: 'gray',    

    // 넷플릭스스탈
    height: 20,
    width: 90,
    marginTop: 30,
    marginLeft: 160,
    borderWidth: 0, 
    backgroundColor: '#f3f3f3',
  },
  dropdownOpen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - (Platform.OS === 'ios' ? 121 : -41),
    opacity: 0.9,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdownClose: {
    width: Dimensions.get('window').width,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // height: Dimensions.get('window').height - 114,
    // opacity: 0.9,
    zIndex: -1,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
});

export default styles;
