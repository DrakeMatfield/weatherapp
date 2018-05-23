import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';

export default class NotificationTab extends Component {
  render() {
    return (
      <View
        nativeID="Notification"
        style={[styles.tabContent, this.props.show && styles.show]}>
        <Text>
          Sorry, the notificaton system hasn't yet been implemented.
          {/*<label className="switch">
                <input id="id_notifer" type="checkbox" onchange="On_Notify('id_notifer');" />
                <span id="id_notifer_span" className="slider round"></span><span id="id_notifer_label">Notification</span>
            </label>
            <p>
            Sorry, the notificaton system hasn't yet been implemented.</p>
            <span id="id_Notification_results"></span>*/}
        </Text>

      </View>
    );
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
});
