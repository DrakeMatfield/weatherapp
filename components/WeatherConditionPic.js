// JScript File
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WeatherConditionPic(props) {
  return (
    <View nativeID="id_condition_fig" style={styles.fig}>
      <Image
        nativeID="id_condition_pic"
        style={[{ width: 100, height: 100 }, styles.imgcondition]}
        source={{ uri: props.source }}
      />
      <Text>{props.condition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //display: 'none',
    //padding-top: 6px ;
    color: 'White',
    backgroundColor: '#333333',
    /* padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none; */
    //-webkit-animation: fadeEffect 1s;
    //animation: fadeEffect 1s;
    //text-shadow: 0px 1px 2px rgba(00,00,00,.12);
    //height: 100%;
  },
  fig: {
    //display: 'none',
    //padding-top: 6px ;
    //color: 'White',
    //backgroundColor: '#333333',
  },
  imgcondition: {
    //display: 'none',
    //padding-top: 6px ;
    //color: 'White',
    //backgroundColor: '#333333',
  },
});
