import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Users from './components/Users/Users';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Welcome Raufu Prezens!</Text>
      <Text>Total Friends: {users.length}</Text>
      {
        users.map(user => <Users user={user} id={user.id}>{user.name}</Users>)
      }
      <Text style={{ fontSize: 40 }}>{name}</Text>
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
        onChangeText={text => setName(text)}
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
