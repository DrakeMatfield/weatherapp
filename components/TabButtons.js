import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class TabButtons extends Component {
  _handleButtonPressToday = () => {
    Alert.alert('Button Today!', 'You did it!');
  
       this.props.tabClick("Today");
  };

  _handleButtonPressForecast = () => {
    Alert.alert('Button Forecast!', 'You did it!');
     this.props.tabClick("Forecast");
  };

  _handleButtonPressNotification = () => {
    Alert.alert('Button Notification!', 'You did it!');
     this.props.tabClick("Notification");
  };

  render() {
    return (
      <View style={styles.tab}>
        <TouchableOpacity
          onPress={this._handleButtonPressToday}
          style={[styles.tablinks, styles.tabSpace]}>

          <Text style={styles.tabText}>
            Today
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._handleButtonPressForecast}
          style={[styles.tablinks, styles.tabSpace]}>
          <Text style={styles.tabText}>
            Forcast
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._handleButtonPressNotification}
          style={[styles.tablinks, styles.tabSpace]}>
          <Text style={styles.tabText}>
            Notification
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //alignContent: 'stretch',
    //width: 100%,
    //overflow: hidden,
    /*border: 1px solid #ccc,
    background-color: #f1f1f1;*/
    backgroundColor: '#333333',
    height: 40,
    //margin-right:-1%
  },
  tabSpace: {
    //width: 33%,
  },
  tabText: {
    //width: 33%,
    color: '#777777',
    //alignContent: 'center',
  },
});
