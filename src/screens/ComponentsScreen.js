import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ComponentsScreen () {

    const styles = StyleSheet.create({
        textStyle: { fontSize: 50 }
    })
    
    const names = <Text>My name is Ashley</Text>

    return (   
        <View>
            <Text style={styles.textStyle}>Hello Friends</Text>
            {names}
        </View>

    )
}