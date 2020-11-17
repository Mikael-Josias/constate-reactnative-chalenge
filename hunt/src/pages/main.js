import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

const Main: () => React$Node = props => {

    useEffect(() => {
        loadProducts();
    });

    return (
        <View>
            <Text>Página Main!</Text>
        </View>
    );
};

Main['navigationOptions'] = screenProps => ({
    title: 'JSHunt'
});

loadProducts = async () => {
    const response = await api.get(`/products`);

    const { docs } = response.data;

    console.log(docs);
};

export default Main;