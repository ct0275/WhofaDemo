import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    height: 1,
    // backgroundColor:'pink',
  },
  content: {
    flex:1,
  },
  elem: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // borderColor:'#eee',
    // borderBottomWidth:0.5,
    // paddingLeft: 5,
    // backgroundColor:'blue',
  },
  title: {
    // backgroundColor:'pink',
    width: '60%',
    marginTop: 10,
  },
  userInfo: {
    // paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor:'skyblue',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    // elevation: 10,
  },
  thumbnail: {
    margin: 5,
    width: 75,
    height: 75,
  },
  name: {
    // paddingLeft: 5,
  },
  overlay:{
    position: 'absolute',
    top: 35,
    bottom: 0,
    left: 35,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
});

export default styles;
