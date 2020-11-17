import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
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

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>

            <TouchableOpacity onPress={() => {}}>
                <Text>Acessar!</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                data={docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
            />
        </View>
    );
};

Main['navigationOptions'] = screenProps => ({
    title: 'JSHunt'
});



export default Main;