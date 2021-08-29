import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    // paddingTop: 10,
    flex: 1,
    flexDirection: 'column', 
    // alignItems: 'center',
    justifyContent: 'flex-start',
    // height: 600,
  },
  top: {
    // elevation: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    // padding: 10,
    alignItems: 'center',
  },
  // 비디오재생시 하단플랫리스트 없어짐 방어코드, topWrap
  topWrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
  },
  topVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  bottom: {
    flex: 1,
    // marginTop: 10,
    elevation: 10,
    // backgroundColor: "white",
  },  
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    // paddingRight: 10,
    // paddingVertical: 5,
    // marginLeft: 10,
    alignItems: 'flex-start',
    // justifyContent: 'space-around',
    justifyContent: 'flex-start',
    // backgroundColor: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  bottomThumb: {
    width: Dimensions.get('window').width / 5 + 2,
    height: Dimensions.get('window').width / 5 + 2,
    marginLeft: 5,
    marginTop: 5,
  },
  overlay:{
    position: 'absolute',
    top: 40,
    bottom: 0,
    left: 40,
    right: 0,
  },
  bottomName:{
    width: 190,
    paddingVertical: 5,
    fontSize:15,
    fontWeight:"bold",
    marginLeft: 5,
    // backgroundColor: "skyblue",
  },
  bottomLikes:{
    width: 60,
    paddingVertical: 5,
    fontSize: 12,
    color:"#808080",
    // backgroundColor: "pink",
  },
  bottomTime:{
    paddingVertical: 5,
    fontSize: 12,
    color:"#808080",
    marginLeft: 5,
    // backgroundColor: "yellow",
  },
});

export default styles;
