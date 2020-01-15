import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={ require('../../assets/forest.jpg')} descriptionImage="test" />
            <ImageDetail title="Beach"  imageSource={ require('../../assets/beach.jpg')}  descriptionImage="test2" />
            <ImageDetail title="Mountain" imageSource={ require('../../assets/mountain.jpg')} descriptionImage="test3" />
        </View>
    )} 

const styles = StyleSheet.create({});

export default ImageScreen;