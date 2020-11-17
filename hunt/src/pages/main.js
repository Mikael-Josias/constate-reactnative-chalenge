import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

const Main: () => React$Node = props => {

    const [counter, setCounter] = useState(0);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        loadProducts();
    });

    loadProducts = async () => {
        const response = await api.get(`/products`);
    
        const { docs } = response.data;
    
        setDocs(docs);
    };

    return (
        <View>
            <Text>Página Main!</Text>
            {docs.map(product => <Text key={product._id}>{product.title}</Text>)}
        </View>
    );
};

Main['navigationOptions'] = screenProps => ({
    title: 'JSHunt'
});



export default Main;