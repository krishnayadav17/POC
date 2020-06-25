import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 200,
  },
  num: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  colorBox: {
    height: 100,
    width: 100,
    margin: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  bullets: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    padding: 10,
    fontSize: 50,
  },
});

export default styles;
