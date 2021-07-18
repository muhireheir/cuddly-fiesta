import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height: 170 }
    };
  }


  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ ...this.state, size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <>
        {this.props.products.loading ? (<Text></Text>)

          : (
            <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
              <Carousel
                delay={4000}
                style={this.state.size}
                autoplay
              >
                {this.props.products.data.slice(3, 9).map((product, key) => (
                  <View key={key} style={[{ backgroundColor: 'blue' }, this.state.size]}>
                    <Image style={this.state.size} source={{
                      uri: product.img1
                    }} />
                  </View>
                ))}
              </Carousel>
            </View>)}
      </>
    );
  }
}


export default CarouselExample;