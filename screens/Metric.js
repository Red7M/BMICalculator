import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Metric extends Component {
  static navigationOptions = {
    title: 'Metric',
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
      heightCM: this.heightCM,
      weightKG: this.weightKG,
    };

    console.log(payload);
  };

  updateText = () => {};

  render() {
    const computeBMIClickHandler = () => {
      console.log(`Height is: ${this.heightCM}`);
      console.log('----------------------');
      console.log(`Weight is: ${this.weightKG}`);
      this.result = this.weightKG / (this.heightCM * this.heightCM);
      console.log(`Result is: ${this.result}`);
      this.setState({result: this.result});
    };

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Enter your height in meters: </Text>
          <TextInput
            style={styles.input}
            placeholder="in metres"
            returnKeyLabel={'next'}
            onChangeText={(value) => {
              this.heightCM = value;
              console.log(
                'onChangedText triggered',
                `New height is ${this.heightCM}`,
              );
            }}
          />
          <Text>Enter your weight in kilograms: </Text>
          <TextInput
            style={styles.input}
            placeholder="in kilograms"
            onChangeText={(value) => {
              this.weightKG = value;
              console.log(
                'onChangedText triggered',
                `New weight is ${this.weightKG}`,
              );
            }}
          />
          <Text>Result: {this.state.result}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Compute BMI" onPress={computeBMIClickHandler} />
          </View>
        </View>

        <View>
          <Button title="Go to standard" onPress={() => navigate('Standard')} />
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
});
