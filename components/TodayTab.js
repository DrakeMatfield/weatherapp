import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import WeatherConditionPic from './WeatherConditionPic';
import { Drake_opinion_basedon_temperature } from './analytical.js';

export default class TodayTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.weather) {
      return (
        <View style={[styles.tabContent, this.props.show && styles.show]}>
          <View nativeID="Today">
            <View nativeID="id_results">
              <Text style={styles.date_time_display}>
                {this.props.weather.get_current_weather_timestamp(
                  '#MONTH #DATE, #TIME'
                )}
              </Text>
              <Text style={styles.dropmargin}>
                High:
                {' '}
                {this.props.weather.Forecasted_HIGH}
                {' '}
                - Low:
                {' '}
                {this.props.weather.Forecasted_LOW}
              </Text>
              <Text style={styles.temperature}>
                {this.props.weather.Condition.Temperature}
                °
                {this.props.weather.Units.Temperature_units_def}
                {/*<sup><small><MyComponent htmlCode={this.props.weather.Units.Temperature_units}/></small></sup>*/}
              </Text>
              <WeatherConditionPic
                source={this.props.weather.Tag[2]}
                condition={this.props.weather.Tag[3]}
              />
              {this.props.weather.Tag[3]}
              {/* {this.props.weather.Tag[2]}<MyComponent htmlCode={props.weather.Card_Pic}/>*/}

              <Text style={styles.remMar}>
                Location:
              </Text>
              <Text>
                _____________________________________
              </Text>
              <Text style={styles.date_time_display}>
                {this.props.weather.Location.get_Location()}
              </Text>
              <Text />
              <Text style={styles.opinion}>
                Drake's Thoughts!:
                {' '}
                {Drake_opinion_basedon_temperature(
                  this.props.weather.Condition.Temperature
                )}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.tabContent, this.props.show && styles.show]}>

          <View nativeID="Today" />
          <View nativeID="id_results" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  tabContent: {
    display: 'none',
    backgroundColor: 'grey',
    //padding-top: 6px ;
    //color:White;
    /* padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none; */
    //-webkit-animation: fadeEffect 1s;
    //animation: fadeEffect 1s;
    //text-shadow: 0px 1px 2px rgba(00,00,00,.12);
    height: '100%',
  },
  show: {
    display: 'flex',
  },
  date_time_display: {
    //display: 'none',
    //backgroundColor: 'grey',
    //padding-top: 6px ;
    //color:White;
    /* padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none; */
    //-webkit-animation: fadeEffect 1s;
    //animation: fadeEffect 1s;
    //text-shadow: 0px 1px 2px rgba(00,00,00,.12);
    // height: '100%',
  },
  dropmargin: {
    //display: 'none',
    // backgroundColor: 'grey',
    //padding-top: 6px ;
    //color:White;
    /* padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none; */
    //-webkit-animation: fadeEffect 1s;
    //animation: fadeEffect 1s;
    //text-shadow: 0px 1px 2px rgba(00,00,00,.12);
    // height: '100%',
  },
  temperature: {
    //display: 'none',
    // backgroundColor: 'grey',
    //padding-top: 6px ;
    //color:White;
    /* padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none; */
    //-webkit-animation: fadeEffect 1s;
    //animation: fadeEffect 1s;
    //text-shadow: 0px 1px 2px rgba(00,00,00,.12);
    //height: '100%',
  },
  remMar: {
    //display: 'none',
    // backgroundColor: 'grey',
  },
  opinion: {
    //display: 'none',
    // backgroundColor: 'grey',
  },
});
