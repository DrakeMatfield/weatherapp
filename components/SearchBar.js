import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // 4.2.0

export default class SearchBar extends Component {
  state = {
    inputValue: '64129',
  };

    on_Submit =() => { 
        this.props.on_Submit(this.state.inputValue);
    }

    on_Enter_Pressed(event) {
        event.preventDefault();
        if (event.keyCode === 13) { { /*  On_Submit(event.target.id); props.on_Submit(event.target.id); */ }
            this.on_Submit("idZipcode");
        }
    }


  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="menu"
          onPress={this._handleButtonPress1}
          color="white"
          style={styles.searchButton}
        />

        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={styles.searchBar}
          placeholder="Search.."
        />
        <Button
          title="Search"
          onPress={this.on_Submit}
          style={styles.searchButton}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //display: 'flex',
    //flexWrap: 'nowrap',
    margin: 12,
    //justifyContent: 'space-between',
    //border: 'solid 2 black',
    borderRadius: 2,
    backgroundColor: 'white',
    color: 'black',
  },
  searchBar: {
    flex: 1,
    //border: 5,
    borderRadius: 0,
    //borderColor: 'gray',
    //borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,

    //width: 100,
    //padding: 15 8,
    //fontSize: 1.8,
    //border: none,
    //height: 100,
  },
  searchButton: {
    //flex: 1,
    //border: 5,
    //borderColor: 'gray',
    //borderWidth: 1,
    color: 'black',
    //textColor: 'black',
    //width: 10,
  },
});

const styleB = {
  buttonStyle: {
    color: 'black',
  },
};
