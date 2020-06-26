import React, { useState, useReducer } from 'react'
import {Text, StylSheet, View} from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const reducer = (state, action) => {
    switch (action.type) {
        case ('change_red'):
            return state.red +action.payload > 255 || state.red + action.payload < 0
                ? state
                : {...state, red: state.red + action.payload}
        case 'change_green':
           return state.green +action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green: state.green + action.payload}
        case 'change_blue':
            return state.blue +action.payload > 255 || state.blue + action.payload < 0
                ? state
                : {...state, blue: state.blue + action.payload}
        default:
            return state
                    }
                }
    export default function SquareScreen() {
                    
    const colorIncrement = 10
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state
    // const [red, setRed] = useState(0)
    // const [green, setGreen] = useState(0)
    // const [blue, setBlue] = useState(0)


    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change)
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change)
    //             return;
    //     }
    // }


    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({type: 'change_red', payload: colorIncrement})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * colorIncrement})}
                color='Red'/>
            <ColorCounter
                color='Green'
                onIncrease={() =>  dispatch({type: 'change_green', payload: colorIncrement})}
                onDecrease={() =>  dispatch({type: 'change_green', payload: -1 * colorIncrement})}
            />
            <ColorCounter
                color='Blue'
                onIncrease={() =>  dispatch({type: 'change_blue', payload: colorIncrement})}
                onDecrease={() =>  dispatch({type: 'change_blue', payload: -1 * colorIncrement})}
            />
            <View style={{ height:200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    )
}