import React from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';


class SettingsScreen extends React.Component {
    static navigationOptions ={
      header: {
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      }
    }
    render() {
      return (
        <View>
          <Button
            title="Reset Liked Jobs"
            large
            icon={{ name: 'delete-forever' }}
            backgroundColor="#F44336"
            onPress={this.props.clearLikedJobs}
          />
        </View>
      );
    }
}

export default connect(null, actions)(SettingsScreen);
