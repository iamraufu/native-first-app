import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Users(props) {
      return (
            <View style={styles.container}>
                  <Text>{props.user.id}. {props.user.name}</Text>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            borderWidth: 2,
            borderColor: 'cyan',
            margin: 5,
            padding: 3,
            borderRadius: 10
      }
})
