import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:'20px'}}>Welcome <span style={{color:'tomato'}}> Raufu Prezens</span>!</Text> */}
      <Text>Welcome Raufu Prezens!</Text>
      <Text style={{fontSize:40}}>{name}</Text>
      <Image
        source={{
          uri: 'https://raufuprezens.files.wordpress.com/2020/04/a-1.jpg?w=683',
        }}
        style={{ width: 200, height: 300 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {text=>setName(text)}
        defaultValue="Your Name"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
