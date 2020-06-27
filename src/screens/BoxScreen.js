import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function BoxScreen () {
    const styles = StyleSheet.create({
        viewStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        viewAStyle: {
            backgroundColor: 'red',
            height: 75,
            width:75
        },
        viewBStyle: {
            backgroundColor: 'green',
            height: 75,
            width: 75,
            marginTop: 65
        },
        viewCStyle: {
            backgroundColor: 'purple',
            height: 75,
            width: 75
        }
    })
    
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewAStyle}></View>
            <View style={styles.viewBStyle}></View>
            <View style={styles.viewCStyle}></View>
        </View>
    )
}