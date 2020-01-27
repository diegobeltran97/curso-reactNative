import React , {useState}from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ColorCounter from './components/ColorCounter';


const SquareScreen = () => {
    const val = 10;

    const [ red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [ blue, setBlue] = useState(0);


   const setColor = ( color, change ) => {
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

 
    return (
    <View>
        <Text> SquareScreen</Text>
        <ColorCounter 
            onIncrease={ () => { 
                 setColor( 'red', val);
                
                }
            }
            onDecrease={ () => setColor('red', -1 * val )}
            color="Red"/>
        <ColorCounter color="Green"
            onIncrease={ () => setColor( 'green', val) }
            onDecrease={ () => setColor('green', -1 * val )}
        />
        <ColorCounter color="blue" 
            onIncrease={ () =>  setColor( 'blue', val) }        

            onDecrease={ () => setColor('blue', -1 * val )}
        />
        <View style={{with: 50, height: 50, backgroundColor: `rgb( ${red}, ${green},${blue} )` }}/>
    </View>
        )
};


const styles = StyleSheet.create({});

export default SquareScreen;