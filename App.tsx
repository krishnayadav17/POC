import React from 'react';
import {View, Text} from 'react-native';
import styles from './src/stylesheet'
import Carousel from './src/views/carousel';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <View style={{flex: 1}}>

        <Carousel itemsPerScrollInPortrait={1}>
          
            <View style={{...styles.colorBox, backgroundColor: 'red'}}>
              <Text style={styles.num}>1</Text>
            </View>

            <View style={{...styles.colorBox, backgroundColor: 'blue'}}>
              <Text style={styles.num}>2</Text>
            </View>

            <View style={{...styles.colorBox, backgroundColor: 'cyan'}}>
              <Text style={styles.num}>3</Text>
            </View>

            <View style={{...styles.colorBox, backgroundColor: 'azure'}}>
              <Text style={styles.num}>4</Text>
            </View>

            <View style={{...styles.colorBox, backgroundColor: 'orange'}}>
              <Text style={styles.num}>5</Text>
            </View>
               
            <View style={{...styles.colorBox, backgroundColor: 'green'}}>
              <Text style={styles.num}>6</Text>
            </View>
                
            <View style={{...styles.colorBox, backgroundColor: 'purple'}}>
              <Text style={styles.num}>7</Text>
            </View>
               
            <View style={{...styles.colorBox, backgroundColor: 'lightblue'}}>
              <Text style={styles.num}>8</Text>
            </View>
              
            <View style={{...styles.colorBox, backgroundColor: 'brown'}}>
              <Text style={styles.num}>9</Text>
            </View>
         
            <View style={{...styles.colorBox, backgroundColor: 'red'}}>
              <Text style={styles.num}>10</Text>
            </View>
               
            <View style={{...styles.colorBox, backgroundColor: 'blue'}}>
              <Text style={styles.num}>11</Text>
            </View>
       
        </Carousel>

      </View>
  );
};



export default App;
