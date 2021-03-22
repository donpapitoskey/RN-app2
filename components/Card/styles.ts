import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black', //ios
    shadowOffset: {
      //ios
      width: 0,
      height: 2,
    },
    shadowRadius: 6, //ios
    shadowOpacity: 0.26, //ios
    elevation: 5, //android
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
