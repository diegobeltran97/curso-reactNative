import React , {useState  , useReducer}from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ColorCounter from './components/ColorCounter';

const val = 10;
const reducer = (state, action) => {
    //state == { red:number, green:number, blue:number }
    // action == { coloroChange: 'red' || green  || blue }
    switch (action.colorToChange) {
        case 'red':
            if( state.red + action.amount > 255 || state.red + action.amount < 0 ) {
                return state;
            } else {
                return { ...state, red: state.red + action.amount};
            }
            
        case 'green':
            return state.green + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
        default:
            return state;
    }

};

const SquareScreen = () => {
   
   const [ state, runMyreducer] = useReducer( reducer, { red: 0, green: 0 , blue: 0 } );
   const { red, green, blue} = state;



  /*   const [ red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [ blue, setBlue] = useState(0); */


  /*  const setColor = ( color, change ) => {
    //    if ( color + change > 255 || color + change < 0 ) {
    //        return;
    //    }else {
    //        change(color + val );
    //    }
    switch(color) {
    case 'red':
        red + change > 255 || red + change < 0 ? null: setRed(red + change)
        return
    case 'green':
        green + change > 255 || green + change < 0 ? null: setGreen(green + change)
        return
    case 'blue':
        blue + change > 255 || blue + change < 0 ? null: setBlue(blue + change)
        return
    }
   }
 */
 
    return (
    <View>
        <Text> SquareScreen</Text>
        <ColorCounter 
            onIncrease={ () => { 
                /*  setColor( 'red', val); */
                runMyreducer({ colorToChange : 'red' , amount: val}) ;
                }
            }
            onDecrease={ () => {
                /*  setColor('red', -1 * val ) */ 
                runMyreducer({ colorToChange : 'red' , amount: val * -1 }) ;
            }}
            color="Red"/>
        <ColorCounter color="Green"
            onIncrease={ () => {
              /*   setColor( 'green', val)  */
              runMyreducer({ colorToChange : 'green' , amount: val}) ;
        } }
            onDecrease={ () => {
               /*  setColor('green', -1 * val) */
               runMyreducer({ colorToChange : 'green' , amount: val * -1 }) ;        
            }}
        />
        <ColorCounter color="blue" 
            onIncrease={ () => {
               /*   setColor( 'blue', val) */
               runMyreducer({ colorToChange : 'blue' , amount: val }) ;
            }}        

            onDecrease={ () => { 
                /* setColor('blue', -1 * val ) */  
                runMyreducer({ colorToChange : 'blue' , amount: val * -1 }) ;
            }}
        />
        <View style={{with: 50, height: 50, backgroundColor: `rgb( ${red}, ${green},${blue} )` }}/>
    </View>
        )
};


const styles = StyleSheet.create({});

export default SquareScreen;