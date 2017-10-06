import React from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { MapView } from 'expo';


class ReviewScreen extends React.Component {
  static navigationOptions = {

    title: 'Review Jobs',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      }
    },
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

  renderLikeJobs() {
    return this.props.likes.map(job => {
      const { company, formattedRelativeTime, url, jobtitle, jobkey } = job;
      const initialRegion = {
       longitude: job.longitude,
       latitude: job.latitude,
       latitudeDelta: 0.045,
       longitudeDelta: 0.02
      };
      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >
          </MapView>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="apply now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.renderLikeJobs()}
        </ScrollView>
      </View>
    );
  }
}

  const styles = {
    detailWrapper: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    italics: {
      fontStyle: 'italic'
    }
  };

function mapStateToProps({ likes }) {
  return {
    likes
  };
}

export default connect(mapStateToProps)(ReviewScreen);
