import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Tabs from '../src/components/Tabs'
import * as Location from "expo-location"
import { useGetWeather } from '../src/hooks/useGetWeather';
import ErrorItem from '../src/components/ErrorItem';

const index = () => {

  const [loading, error, weather] = useGetWeather()
  
  if (weather && weather.list && !loading) {
    return (
      <Tabs weather={weather} />
    )
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'cornflowerblue'} />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default index;