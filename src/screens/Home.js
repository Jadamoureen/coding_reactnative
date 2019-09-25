/* eslint-disable react-native/no-inline-styles */
// import React, { Component } from 'react';
// import { Text, View, Image } from 'react-native';

import React from 'react';
import {Button, View, Text} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'aliceblue',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
            Welcome to Jada's Bug
          </Text>

          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
