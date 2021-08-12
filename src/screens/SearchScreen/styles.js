import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 5,
    // padding: 5,
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  subContainer: {
    marginTop: 30,
    // padding: 10,
    // flex: 1,
    flexDirection: 'row', 
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'

  },
  hashtag: {
    alignSelf: 'flex-start',
    // marginRight: 40,
    marginLeft: 5,
    marginTop: 15,
    padding: 7,
    // backgroundColor: 'darkorange',
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: '#fff',
  },
});

export default styles;
