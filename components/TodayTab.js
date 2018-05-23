import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class TodayTab extends Component {
  constructor(props) {
    super(props);
  }
render() {
    if (this.props.weather) {
      return (
        <View style={styles.tabContent}>

          <Text>
            {this.props.weather.get_current_weather_timestamp(
              '#MONTH #DATE, #TIME'
            )}
          </Text>
          {/* 
                 <span id="id_results">
                <p className="dropmargin">High: {props.weather.Forecasted_HIGH} - Low: {props.weather.Forecasted_LOW}</p>
                <p className="temperature">{props.weather.Condition.Temperature}<sup><small><MyComponent htmlCode={props.weather.Units.Temperature_units}/></small></sup></p>
                
                <MyComponent htmlCode={props.weather.Card_Pic}/>
                <p className="remMar">Location:</p><hr/><p className="date_time_display">{props.weather.Location.get_Location()}</p>
                <p className="opinion"><strong>Drake's Thoughts!:</strong>{props.weather.Condition.Temperature}</p>";
            </span> */}
        </View>
      );
    } else {
      return (
        <View style={styles.tabContent}>
          {/* <span id="id_results"></span>  */}
        </View>
      );
    }
}
}

const styles = StyleSheet.create({
  tabContent: {
    //display: 'none',
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
});
