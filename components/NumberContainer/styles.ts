import {StyleSheet} from 'react-native';
import {theme} from 'constants/theme';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: theme.accent,
    fontSize: 22,
  },
});
