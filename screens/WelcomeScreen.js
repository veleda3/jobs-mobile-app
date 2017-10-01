import React, { Component } from 'react';
import _ from 'lodash';
import { AppLoading } from 'expo';
import { View, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', image: 'https://static.pexels.com/photos/7375/startup-photos.jpg' },
  { text: 'Use this to get a job', image: 'https://static.pexels.com/photos/301703/pexels-photo-301703.jpeg' },
  { text: 'Set your location, then swipe away', image: 'https://static.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg' }
];

class WelcomeScreen extends Component {
  state = {
    token: null,
  };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
    render() {
      if (_.isNull(this.state.token)) {
        return <AppLoading />;
      }
      return (
        <View>
          <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete} />
        </View>
      );
    }
}

export default WelcomeScreen;
