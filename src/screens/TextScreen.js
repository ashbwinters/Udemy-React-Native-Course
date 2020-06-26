import React, { useState } from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'

export default function TextScreen() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const styles = StyleSheet.create({
        input: {
            margin: 15,
            borderColor: 'orange',
            borderWidth: 2
        }
    })
    return (
        <View>
            <Text>Enter your Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={newName => setName(newName)}
            />
            <Text>My Name is {name}</Text>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newPassword => setPassword(newPassword)}
            />
            {password.length < 4 ? <Text>Password is too short!</Text> : null}
        </View>
    )
}