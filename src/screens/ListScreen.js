import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreens() {
    const friends =  [
        {name: 'George', age: 30},
        {name: 'Hank', age: 28},
        {name: 'John', age: 50},
        {name: 'Paul', age: 25},
        {name: 'Ringo', age: 33}
    ]

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 40,
            marginVertical: 50
        }
    });

    return (
        <FlatList            
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
            />
    )
}