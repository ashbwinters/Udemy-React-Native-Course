import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDatail from '../Components/ImageDetail'

export default function ImageScreen () {

    const styles = StyleSheet.create({
        TextStyle: {
            fontSize: 40
        }
    })

    return (
        <View>
            <ImageDatail
                 title='Forest'
                 imageSource={require('../../assets/forest.jpg')}
                 score='3'
            />
            <ImageDatail
                title='Beach'
                imageSource={require('../../assets/beach.jpg')}
                score='5'
            />
            <ImageDatail
                title='Mountain'
                imageSource={require('../../assets/mountain.jpg')}
                score='9'
            />
        </View>
    )
}