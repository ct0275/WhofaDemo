import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    // width: 150,
    width: Dimensions.get('window').width / 3 + 2,
    height: Dimensions.get('window').width / 3 + 2,
  },
  overlay:{
    position: 'absolute',
    top: 60,
    bottom: 0,
    left: 60,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
});

export default styles;
