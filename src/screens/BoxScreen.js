import React from 'react'
import { View , Text , StyleSheet , Button} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>BoxScreen1</Text>
            <Text style={styles.textStyleTwo}>BoxScreen2</Text>
            <Text style={styles.textStyleThree}>BoxScreen3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between'
    },
    textStyleOne: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    textStyleTwo: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        marginTop: 20 
    },
    textStyleThree: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
       /*  ...StyleSheet.absoluteFillObject */
    },

})

export default BoxScreen;