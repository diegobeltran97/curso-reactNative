import React,{ useState} from 'react';
import { View , Text , StyleSheet , TextInput} from 'react-native';

const TextScreen = () => {
    const [ name , setName ] = useState('');
    function minLength(){
        if ( name.length <= 5) {
            return true;
        }
        return false;
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={ newValue => {
                    setName(newValue)
                     
                }}
                value={name}
                />
                { minLength() ? <Text> Password must be longer than 4 characters</Text> : null }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1

    }

});

export default TextScreen;