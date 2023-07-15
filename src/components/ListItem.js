import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../Utilities/weatherType';
import moment from 'moment'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = styles
    return (
        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
            <View>
            <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'transparent'
    },
    temp: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateTextWrapper:{
        flexDirection: 'column'
    }
})

export default ListItem