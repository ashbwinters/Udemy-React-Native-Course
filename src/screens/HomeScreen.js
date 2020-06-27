import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {

  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  return (
    <View>
      <Text style={styles.text}>Art and Science</Text>
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title='Go to Images'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Texting Demo'
        onPress={() => navigation.navigate('Texting')}
      />
       <Button
        title='Go to Box Demo'
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
};
