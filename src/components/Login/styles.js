import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },
  subContainer: {
    margin : 10,
    // backgroundColor: 'pink',
    flexDirection: 'column', 
  },
  inputArea: {
    // margin: 50,
    // backgroundColor: 'skyblue',
    flexDirection: 'row', 
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dropdown: {
    // backgroundColor: 'pink',
    width:  80,
    height:  40,
    zIndex: 10,
    marginTop: 10,
    borderColor: 'gray',
  },
  textInput: {
    borderBottomWidth : 1.0,
    width: 200,
    marginBottom:10,
    marginLeft:10,
  },
});

export default styles;