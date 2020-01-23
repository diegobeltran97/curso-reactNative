import React , {useState}from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ColorCounter from './components/ColorCounter';


const SquareScreen = () => {
    const [ red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [ blue, setBlue] = useState(0);


    const val = 10;
    return (
    <View>
        <Text> SquareScreen</Text>
        <ColorCounter 
            onIncrease={ () => { 
                setRed(red + val ) 
                
                }
            }
            onDecrease={ () => setGreen(red - val)}
            color="Red"/>
        <ColorCounter color="Green"
            onIncrease={ () => { 
                setRed(red + 1 ) 
                
                }
            }
            onDecrease={ () => setGreen(green - val)}
        />
        <ColorCounter color="blue" 
            onIncrease={ () =>  setBlue(red + val ) }        

            onDecrease={ () => setBlue(blue - val)}
        />
        <View style={{with: 50, height: 50, backgroundColor: `rgb( ${red}, ${green},${blue} )` }}/>
    </View>
        )
};


const styles = StyleSheet.create({});

export default SquareScreen;