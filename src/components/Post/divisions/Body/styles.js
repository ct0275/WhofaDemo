import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderRadius: 30,
  },
  videoShort: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4 ,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  thumbnail: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4 ,
    borderRadius: 10,
  },
})

export default styles;
