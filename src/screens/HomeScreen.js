import React from 'react';
import { Text, StyleSheet , View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ( { navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
       style={styles.spaceButton}
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components Demo"
        />  

      <Button 
        style={styles.spaceButton}
        onPress={() => navigation.navigate('List')} 
        title="Go to List Components"
        />  

<Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('ImageScreen')} 
        title="Go to Image Screen"
        /> 


        <Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('CounterScreen')} 
        title="Go to Counter"
        /> 

        <Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('ColorScreen')} 
        title="Go to Colors"
        /> 


      <Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('SquareScreen')} 
        title="Go to SquareScrenn"
        /> 

      <Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('TextScreen')} 
        title="Go to TextScreen"
        /> 

    <Button 
         style={styles.spaceButton}
        onPress={() => navigation.navigate('BoxScreen')} 
        title="Go to Box Screen"
        /> 
       
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  spaceButton: {
    margin: 40
  }
});

export default HomeScreen;
