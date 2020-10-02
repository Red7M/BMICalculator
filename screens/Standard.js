import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Standard extends Component {
  static navigationOptions = {
    title: 'Standard',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor() {
    super();
    this.state = {
      result: 0,
    };
  }

  _register = () => {
    const payload = {
      heightFt: this.heightFt,
      weightPds: this.weightPds,
      result: this.result,
    };

    console.log(payload);
  };

  updateText = () => {};

  render() {
    const computeBMIClickHandler = () => {
      console.log(`Height is: ${this.heightFt}`);
      console.log('----------------------');
      console.log(`Weight is: ${this.weightPds}`);
      this.result = (this.weightPds / this.heightFt / this.heightFt) * 4.882;
      console.log(`Result is: ${this.result}`);
      this.setState({result: this.result});
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Enter your height in feet and inches: </Text>
          <TextInput
            style={styles.input}
            placeholder="in feet and inches"
            returnKeyLabel={'next'}
            onChangeText={(value) => {
              this.heightFt = value;
              console.log(
                'onChangedText triggered',
                `New height is ${this.heightFt}`,
              );
            }}
          />
          <Text>Enter your weight in pounds: </Text>
          <TextInput
            style={styles.input}
            placeholder="in pounds"
            onChangeText={(value) => {
              this.weightPds = value;
              console.log(
                'onChangedText triggered',
                `New weight is ${this.weightPds}`,
              );
            }}
          />
          <Text>Result: {this.state.result}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Compute BMI" onPress={computeBMIClickHandler} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 50,
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'white',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  nextButton: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
