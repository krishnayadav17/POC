import React, { Component } from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import {CarouselComponetProps, CarouselComponetState} from '../interface';
import styles from '../stylesheet';

class Carousel extends React.Component<CarouselComponetProps,CarouselComponetState> {
  constructor(props: CarouselComponetProps) {
    super(props);
    this.state = {
      position: 1,
      intervals: 1,
      itemsPerInterval: this.calculateItemsPerInterval(),
      bullets: [],
      noOfItems: React.Children.count(this.props.children),
      slides : undefined
    };
  }

  calculateItemsPerInterval(){
    return Dimensions.get('window').height > Dimensions.get('window').width
           ? this.props.itemsPerScrollInPortrait * 1
           : this.props.itemsPerScrollInPortrait * 2;
  }

  init = () => {
    var state: CarouselComponetState = this.state;
    state.itemsPerInterval = this.calculateItemsPerInterval();
    state.intervals = Math.ceil(state.noOfItems / state.itemsPerInterval);
    state.position = 1;
    this.setState(state);
    this.refs.scrollview.scrollTo({x: 0, y: 0, animated: true});
    this.bulletGenerator();
    this.slidesGenerator();
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
    this.setState({bullets: bullets});
  };

  slidesGenerator = () => {
    var itemsInLastInterval:number = this.state.noOfItems % this.state.itemsPerInterval;
    var count = 0;
    const children = React.Children.map(this.props.children, (child: any) => {
      count++;
        return (
          <View style={{...styles.slide,maxWidth : 
                                      count > Math.floor(this.state.noOfItems / this.state.itemsPerInterval) * this.state.itemsPerInterval 
                                      ? `${100 / itemsInLastInterval}%` : `${100 / this.state.itemsPerInterval}%` }}>
            {child}
          </View>
        )
      })
    this.setState({slides : children})    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          ref="scrollview"
          pagingEnabled
          contentContainerStyle={{width: `${100 * this.state.intervals}%`,alignItems: 'center'}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          onContentSizeChange={() => this.init()}
          onScroll={(data) => {
            this.getPosition(
              data.nativeEvent.layoutMeasurement.width,
              data.nativeEvent.contentOffset.x,
            );
          }}>
          {this.state.slides}
        </ScrollView>
        <View style={styles.bullets}>{this.state.bullets}</View>
      </View>
    );
  }
}

export default Carousel;
