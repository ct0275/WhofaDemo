import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 5,
    // flex: 1,
    flexDirection: 'column', 
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 600,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    // shadowRadius: 1,
    shadowColor: '#000000',
  },
  topProfile: {
    // backgroundColor: Colors.buttonSelected,
    elevation: 10,
    borderColor: 'transparent',
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: '75%',
    // backgroundColor: "pink",
  },
  profilePicture: {
    marginTop: 10,
    // height: '75%'
  },
  middleProfile: {
    alignItems: 'flex-start',
    marginTop: 10,
    // height: '25%',
    // backgroundColor: "yellow",
  },
  name: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  intro: {
    marginTop: 10,
    textAlign: 'left',
    fontWeight: 'normal',
  },
  hashtag: {
    marginTop: 5,
    color: "orange",
    textAlign: 'left',
    fontWeight: 'normal',
  },
  bottomProfile: {
    marginTop: 10,
    // backgroundColor: "green",
  },
  infoContainer: {
    // flex: 1,
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'space-between', 
    // backgroundColor: "skyblue",
    // height: '14%',
  },
  editButton: {
    elevation: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  displayButton: {
    elevation: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 120,
    marginTop: 10,
    height: 50,
  },
  displayText: {
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default styles;
