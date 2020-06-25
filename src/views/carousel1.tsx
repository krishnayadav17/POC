import React from 'react';
import {View, ScrollView, Text, Dimensions, StyleSheet} from 'react-native';
import Data from './data';

class Carousel1 extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      position: 1,
      intervals: 1,
      itemsPerInterval:
        Dimensions.get('window').height > Dimensions.get('window').width
          ? props.itemsPerScrollInPortrait * 1
          : props.itemsPerScrollInPortrait * 2,
      bulletss: [],
      noOfItems: props.items.length,
    };
  }

  init = (width: number) => {
    var state = this.state;
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      state.itemsPerInterval = this.props.itemsPerScrollInPortrait * 1;
    } else {
      state.itemsPerInterval = this.props.itemsPerScrollInPortrait * 2;
    }
    state.intervals = Math.ceil(state.noOfItems / state.itemsPerInterval);
    this.setState(state);
    console.log(this.state.intervals, this.state.itemsPerInterval);
    this.bulletGenerator();
  };

  getPosition = (layoutMeasurement: number, x_position: number) => {
    var position: number = Math.round(x_position / layoutMeasurement) + 1;
    this.setState({position: position});
    this.bulletGenerator();
  };

  bulletGenerator = () => {
    let bullets: any = [];
    for (let i = 1; i <= this.state.intervals; i++) {
      bullets.push(
        <Text
          key={i}
          style={{
            ...styles.bullet,
            opacity: this.state.position === i ? 0.5 : 0.1,
          }}>
          &bull;
        </Text>,
      );
    }
    this.setState({bulletss: bullets});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          contentContainerStyle={{width: `${100 * this.state.intervals}%`}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          centerContent={true}
          onContentSizeChange={(width, height) => this.init(width)}
          onScroll={(data) => {
            this.getPosition(
              data.nativeEvent.layoutMeasurement.width,
              data.nativeEvent.contentOffset.x,
            );
          }}>
          <Data itemsPerInterval={this.state.itemsPerInterval}></Data>
        </ScrollView>
        <View style={styles.bullets}>{this.state.bulletss}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Carousel1;
