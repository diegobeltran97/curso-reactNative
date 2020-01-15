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
       
    </View>
  );
  
 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  spaceButton: {
    margin: '25'
  }
});

export default HomeScreen;
