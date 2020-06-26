import React from 'react'
import {Text, StylSheet, View, Button} from 'react-native'

export default function ColorCounter({ color, onIncrease, onDecrease }) {
    return (
        <View>
            <Button
                title={`Increase ${color}`}
                onPress={()=> onIncrease()}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={()=> onDecrease()}
            />
        </View>
    )
}