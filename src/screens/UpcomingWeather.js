import React from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar, FlatList, ImageBackground } from "react-native";
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
    const {container, skyImage} = styles
    return (
        <SafeAreaView style={[container, {flex: 1}]}>
            <ImageBackground source = {require('../../assets/skyclouds.jpg')} style= {skyImage}>
            <FlatList
                data={weatherData}
                renderItem={({ item }) => <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />}
                keyExtractor={(item) => item.dt_txt}
            /> 
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'lightskyblue',
    },
    skyImage:{
        flex:1
    }
})

export default UpcomingWeather