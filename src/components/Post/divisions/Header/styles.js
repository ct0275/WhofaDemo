import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    // backgroundColor: 'yellow'
  },
  right: {
    marginRight: 15,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  menuOptions: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 0.3,
    // backgroundColor: 'rgba(0,0,0,0.1)'
  },
  name: {
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'gray'
  },
  topbar: {
    // backgroundColor: 'green',
    alignSelf: 'center',
    color: 'gray'
  }
});

export default styles;
