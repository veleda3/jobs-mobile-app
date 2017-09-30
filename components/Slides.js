import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class Slides extends React.Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>

        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};
