import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    padding: 5,
    // flex: 1,
    flexDirection: 'column', 
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 600,
  },
  topProfile: {
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: '75%',
    // backgroundColor: "pink",
  },
  profilePicture: {
    marginTop: 10,
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
    color: "#ea8041",
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
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  displayButton: {
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 120,
    marginTop: 10,
  },
  displayText: {
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default styles;
