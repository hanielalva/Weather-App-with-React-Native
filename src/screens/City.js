import React from 'react'
import { StyleSheet, Text, SafeAreaView, ImageBackground, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import moment from 'moment'

const City = (weatherData) => {
    const { container, image, cityName, cityText, countryName, populationWrapper, populationText, riseSetText, riseSetWrapper, rowLayout } = styles
    const {name, country, population, sunrise, sunset} = weatherData.weatherData
    console.log(weatherData)
    console.log(name)
    console.log(sunrise)
    console.log(sunset)
    console.log(moment(sunset).format('h:mm:ss a'))

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/citybg.jpg')} style={image}>
                <Text style={[cityName, cityText]}>{`name: ${name}`}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={'blue'} bodyText={`Population: ${population}`} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City