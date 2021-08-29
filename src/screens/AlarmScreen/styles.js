import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      // paddingLeft: 10,
      paddingRight: 16,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    root: {
      backgroundColor: "#ffffff",
      marginTop:10,
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6
    },
    separator: {
      height: 1,
      backgroundColor: "#CCCCCC"
    },
    image:{
      width:45,
      height:45,
      borderRadius:20,
      marginLeft:20
    },
    time:{
      fontSize:11,
      color:"#808080",
    },
    name:{
      width: 240,
      fontSize:16,
      fontWeight:"bold",
    },
  }); 

export default styles