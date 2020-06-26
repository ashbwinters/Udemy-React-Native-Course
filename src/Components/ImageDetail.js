import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ImageDatail (props) {

    const styles = StyleSheet.create({
        TextStyle: {
            fontSize: 40
        }
    })

    return(
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    )
}