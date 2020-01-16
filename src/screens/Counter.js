import React, { useState } from 'react';
import { Text, StyleSheet , View, Button, TouchableOpacity } from 'react-native';


const Counter = () => {
    const [ counter, changeCOunter ] = useState(0);

    return <View>
        <Button title="Increase" onPress={ () => {
            //Don`t do this
            //counter ++
            changeCOunter(counter + 1);
        } } />
        <Button title="Decrease" onPress={ () => {
            //Don`t do this
            //counter ++
        changeCOunter(counter - 1) }} />
        <Text>Current Count: { counter }</Text>
    </View>
};


const styles = StyleSheet.create({});

export default Counter;