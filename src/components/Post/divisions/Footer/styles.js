import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 5,
    // backgroundColor: 'blue',
  },
  iconsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // padding: 5,
    // backgroundColor: 'blue',
  },
  rightIcons: {
    zIndex : 1,
    flexDirection: 'row',
    width: 70,
    position: 'absolute',
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 10,
    // backgroundColor: 'blue',
  },
  likes: {
    fontWeight: 'bold',
    margin: 1,
  },
  caption: {
    margin: 1,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 1,
  }
});

export default styles;
