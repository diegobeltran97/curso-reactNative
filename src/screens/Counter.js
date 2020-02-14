import React, { useState , useReducer} from 'react';
import { Text, StyleSheet , View, Button, TouchableOpacity } from 'react-native';


const reducer = ( state, action ) => {
    //state == { count: number}
    // action == { type: 'increment' or "decrement" , payload: 1}
   
    switch (action.Change) {
        case 'increase':
            return  { ...state, counter: state.counter + 1};

        case 'decrease':
            return  { ...state, counter: state.counter - 1};
    
        default:
            return state;
            break;
    }
}

const Counter = () => {
    /* const [ counter, changeCOunter ] = useState(0); */
    

    const [ states, runMyReducer] = useReducer( reducer, {  counter: 0 })
    const { counter } = states;

    return <View>
        <Button title="Increase" onPress={ () => {
            //Don`t do this
            //counter ++
            runMyReducer({ Change: 'increase'  });
            console.log('hey');
        } } />
        <Button title="Decrease" onPress={ () => {
            //Don`t do this
            //counter ++
            runMyReducer( { Change: 'decrease'} );
        }} 
         />
        <Text>Current Count: { counter }</Text>
    </View>
};


const styles = StyleSheet.create({});

export default Counter;