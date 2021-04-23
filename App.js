import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

import {Calc} from './Calc';

export default function App() {
  const [length, setLength] = useState(0);

  const [result, setResult] = useState();

  function Calculate() {
    if (!parseInt(length) ) {
        alert ('Нужно писать число!');
        setResult();
    } else {
        setResult(Calc(length));
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.textInput}
      onChangeText={text => setLength(text)}
      />
      <Button 
      title="Выполнить"
      onPress={Calculate}
      />
      <Text style={styles.paragraph}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
