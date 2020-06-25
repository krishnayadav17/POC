import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Data = (props: any) => {
  var maxWidth: string = '100%';

  switch (props.itemsPerInterval) {
    case 1:
      maxWidth = '100%';
      break;
    case 2:
      maxWidth = '50%';
      break;
    case 3:
      maxWidth = '33.33%';
      break;
    case 4:
      maxWidth = '25%';
      break;
    default:
      maxWidth = '100%';
      break;
  }

  return (
    <>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'red'}}></View>
        <Text style={styles.num}>1</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'blue'}}></View>
        <Text style={styles.num}>2</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'orange'}}></View>
        <Text style={styles.num}>3</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'green'}}></View>
        <Text style={styles.num}>4</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'purple'}}></View>
        <Text style={styles.num}>5</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'black'}}></View>
        <Text style={styles.num}>6</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'brown'}}></View>
        <Text style={styles.num}>7</Text>
      </View>
      <View style={{...styles.slide, maxWidth: maxWidth}}>
        <View style={{...styles.colorBox, backgroundColor: 'red'}}></View>
        <Text style={styles.num}>8</Text>
      </View>
      <View style={{...styles.slide, maxWidth: '100%'}}>
        <View
          style={{
            ...styles.colorBox,
            backgroundColor: 'blue',
            margin: 10,
          }}></View>
        <Text style={styles.num}>9</Text>
      </View>
    </>
  );
};

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
  },
});

export default Data;
