import React from 'react';
import {View, ScrollView, Text, Dimensions, StyleSheet} from 'react-native';
import {carouselComponetProps, carouselComponetState} from '../interface';
import styles from '../stylesheet';

class Carousel extends React.Component<
  carouselComponetProps,
  carouselComponetState
> {
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
      noOfItems: React.Children.count(this.props.children)
    };
  }

  init = () => {
    var state: carouselComponetState = this.state;
    state.itemsPerInterval =
      Dimensions.get('window').height > Dimensions.get('window').width
        ? this.props.itemsPerScrollInPortrait * 1
        : this.props.itemsPerScrollInPortrait * 2;
    state.intervals = Math.ceil(state.noOfItems / state.itemsPerInterval);
    state.position = 1;
    this.setState(state);
    this.refs.scrollview.scrollTo({x:0,y:0,animated:true});
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
    var maxWidth: string = '';
    switch (this.state.itemsPerInterval) {
      case 1:
        maxWidth = '100%';
        break;
      case 2:
        maxWidth = '50%';
        break;
      case 3:
        maxWidth = '33.3333%';
        break;
      case 4:
        maxWidth = '25%';
        break;
      case 5:
        maxWidth = '20%';
        break;
      case 6:
        maxWidth = '16.6667%';
        break;
      default:
        maxWidth = '100%';
        break;
    }
    const children = React.Children.map(this.props.children, (child: any) => {
      return <View style={{...styles.slide, maxWidth: maxWidth}}>{child}</View>;
    });

    return (
      <View style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          ref = 'scrollview'
          pagingEnabled
          contentContainerStyle={{width: `${100 * this.state.intervals}%`,alignItems:'center'}}
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
          {children}
        </ScrollView>
        <View style={styles.bullets}>{this.state.bulletss}</View>
      </View>
    );
  }
}

export default Carousel;
