import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function CounterScreen() {

    const countIncrementor = 1
    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment': return {...state, count: state.count + action.payload }
            case 'decrement': return {...state, count: state.count - action.payload }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => dispatch({type: 'increment', payload: countIncrementor})}
            />
            <Button
                title='Decrease'
                onPress={() => dispatch({type: 'decrement', payload: countIncrementor})}
            />
            <Text>Count: {state.count}</Text>
        </View>
    )
}