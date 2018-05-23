// JScript File
import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';
import Header from './Header';
import TodayTab from './TodayTab';
import ForecastTab from './ForecastTab';
import NotificationTab from './NotificationTab';
import { Weather } from './Weather.js';
import { ParseWeatherYahoo } from './ParserWeatherYahooApi.js';

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      todayShow: false,
      forecastShow: false,
      notificationShow: false,
    };
    // This binding is necessary to make `this` work in the callback
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(tab) {
    this.setState({
      todayShow: false,
      forecastShow: false,
      notificationShow: false,
    });

    switch (tab) {
      case 'Today':
        this.setState(prevState => ({
          todayShow: !prevState.todayShow,
        }));
        break;
      case 'Forecast':
        this.setState(prevState => ({
          forecastShow: !prevState.forecastShow,
        }));
        break;
      case 'Notification':
        this.setState(prevState => ({
          notificationShow: !prevState.notificationShow,
        }));
        break;
      default:
    }
  }

  api_call(url) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.callbackFunction = this.callbackFunction;
    xmlhttp.callbackFunctionOnError = this.callbackFunctionOnError;

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var readableData = JSON.parse(this.responseText);
        this.callbackFunction(this.responseText);
      }
      if (this.readyState == 4 && this.status >= 400) {
        var code = this.status;
        this.abort(); // this line might not be needed.
        //Status Code Error
        this.callbackFunctionOnError(
          new Error(
            'There was an error getting the weather for you. ( status code: ' +
              code +
              ')'
          )
        );
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  callbackFunction = data => {
    var readableData = JSON.parse(data);
    alert(data);
    if (readableData.query.count > 0) {
      //Display_Results(['idZipcode', 'id_results', 'id_forecast_results'], ParseWeatherYahoo(readableData));

      var zz = ParseWeatherYahoo(readableData);
      this.setState({ weather: zz });
    } else {
      alert('Need to implement: no found');
      // document.getElementById('id_results').innerHTML = "<h2>Search Found Nothing!</h2>";
    }
  };

  callbackFunctionOnError = data => {
    alert('Error' + data);
  };

  on_Submit(element_id) {
    //var zipcode = document.getElementById(element_id).value;
    var zipcode = element_id;

    var str =
      "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='#ZIPCODE')&format=json";
    var url = str.replace('#ZIPCODE', zipcode);

    this.api_call(url);
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          on_Submit={function(element_id) {
            this.on_Submit(element_id);
          }.bind(this)}
          tabClick={this.tabClick}
        />
        <View>
          <TodayTab weather={this.state.weather} show={this.state.todayShow} />
          <ForecastTab
            weather={this.state.weather}
            show={this.state.forecastShow}
          />
          <NotificationTab
            weather={this.state.weather}
            show={this.state.notificationShow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
