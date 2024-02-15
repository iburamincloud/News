import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold', marginLeft: 1, marginRight: 1},
  seperator: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1,
  },
  description: {marginTop: 3, marginLeft: 1, marginRight: 1},
});
