import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { styles } from './styles';

export function SignIn(){
  return(
    <View style={styles.container}>
      <Text> Diego Antoniança </Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
}