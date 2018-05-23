// JScript File
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import TabButtons from './TabButtons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar on_Submit={this.props.on_Submit} />
        <TabButtons tabClick={this.props.tabClick} />
      </View>
    );
  }
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
});
