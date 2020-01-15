import React from 'react';
import { Text, StyleSheet , View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ( { navigation }) => {
  return (
    <View>
      <Text style={StyleSheet.text}>Hi There</Text>
      <Button 
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components Demo"
        />  

      <Button 
        onPress={() => navigation.navigate('List')} 
        title="Go to List Components"
        />  

<Button 
        onPress={() => navigation.navigate('ImageScreen')} 
        title="Go to Image Screen"
        />  
       
    </View>
  );
  
 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
