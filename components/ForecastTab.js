import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';

export default class ForecastTab extends Component {
    constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.weather) {
      return (
     <View style={[styles.tabContent, styles.forecastStyle, this.props.show && styles.show]}>
          <View nativeID="id_forecast_results">
            <Text>{this.props.weather.Title}</Text>
            {/*<MyComponent htmlCode={this.props.weather.Description_HTML}/>
               <Text><a href={this.props.weather.Tag[1]} target="_blank"><Image src={this.props.weather.Tag[0]} className="test" /></a></Text>*/}
          </View>

        </View>
      );
    } else {
      return (
          <View style={[styles.tabContent, styles.forecastStyle, this.props.show && styles.show]}>
          <View nativeID="id_forecast_results" />
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

  forecastStyle: {
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
  },  show: {
    display: 'flex',
  },
});
