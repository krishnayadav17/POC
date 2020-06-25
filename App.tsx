import React from 'react';
import {View, Text} from 'react-native';

import Carousel1 from './src/views/carousel1';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <Carousel1
          items={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          itemsPerScrollInPortrait={1}></Carousel1>
      </View>
    </>
  );
};

export default App;
