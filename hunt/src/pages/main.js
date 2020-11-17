import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>

            <TouchableOpacity onPress={() => {}} style={styles.productButton}>
                <Text style={styles.productButtonText}>Acessar!</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        flex: 1,

    },
    list: {
        padding: 20,

    },
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,

    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24,
    },
    productButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#da552f",
        backgroundColor: "transparent",
    },
    productButtonText: {
        fontSize: 16,
        color: "#da552f",
    },
});

export default Main;