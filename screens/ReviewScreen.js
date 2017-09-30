import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


console.log(StackNavigator.ReviewScreen);
export default class ReviewScreen extends React.Component {
  static navigationOptions = {

    title: 'Review Jobs',
    header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="Settings"
            onPress={() => navigate('settings')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
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
