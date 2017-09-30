import React, { Component } from 'react';
import { View } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', image: 'https://static.pexels.com/photos/7375/startup-photos.jpg' },
  { text: 'Use this to get a job', image: 'https://static.pexels.com/photos/301703/pexels-photo-301703.jpeg' },
  { text: 'Set your location, then swipe away', image: 'https://static.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
    render() {
      return (
        <View>
          <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete} />
        </View>
      );
    }
}

export default WelcomeScreen;
