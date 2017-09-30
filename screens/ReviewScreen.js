import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


console.log(StackNavigator.ReviewScreen);
export default class ReviewScreen extends React.Component {
  static navigationOptions = {

    title: 'Review Jobs',
    headerRight: (
      <Text>hello</Text>
    )
  }


  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
