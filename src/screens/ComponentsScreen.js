import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    return ( 
    <View>
        <Text style={StyleSheet.textStyle11}>Getting Started with react Native</Text>
        <Text style={StyleSheet.textStyle2}>My name is {name}</Text>
    </View>);
};

const style = StyleSheet.create({
    textStyle1: {
       fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});
const name = "diego ?";

export default ComponentsScreen;