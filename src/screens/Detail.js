/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'React';
import {View, Text, Button} from 'react-native';

class DetailsScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'aliceblue',
        }}>
        <Text style={{fontStyle: 'italic', fontSize: 20, textAlign: 'left'}}>
          Testing is the process of identifying defects, where a defect is any
          variance between actual and expected result . “A mistake in code is
          called Error . ” Error found by tester is called defect , Defect
          Defect accepted by development team is called Bug . And build does not
          meet the requirements then it is Failure.
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
