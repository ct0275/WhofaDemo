import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'column', 
    // alignItems: 'center',
    justifyContent: 'flex-start',
    // height: 600,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    // shadowRadius: 1,
    shadowColor: '#000000',
  },
  top: {
    elevation: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  topUserId: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    color: 'gray',
  },
  topStarImage: {
    marginTop: 10,
    // backgroundColor: "yellow",
    // alignItems: 'center',
  },
  topCoinImage: {
    marginTop: 10,
    // backgroundColor: "yellow",
    alignItems: 'center',
  },
  topCoinValue: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'green',
  },
  middle: {
    marginTop: 5,
    // backgroundColor: "green",
  },
  middleButton: {
    elevation: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop : 10,
  },
  bottom: {
    marginTop: 15,
    elevation: 10,
    // backgroundColor: "white",
    // borderRadius: 10,
    // padding: 10,
    flex: 1,
    flexDirection: 'column', 
  },  
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10,
    paddingVertical: 5,
    marginLeft: 10,
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: "skyblue",
  },
  bottomContents: {
    flex: 1,
    flexDirection: 'row',
    width: 120,
    marginLeft: 10,
    padding : 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  bottomImage:{
    width:30,
    height:30,
    borderRadius:20,
    // marginLeft:10
  },
  bottomName:{
    fontSize:12,
    fontWeight:"bold",
  },
  bottomAmount:{
    fontSize:11,
    color:"#808080",
    marginLeft: 5,
  },
  bottomTime:{
    paddingVertical: 10,
    fontSize: 11,
    color:"#808080",
  },
});

export default styles;
