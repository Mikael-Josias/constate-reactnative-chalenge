import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

const Main: () => React$Node = props => {

    const [productInfo, setProductInfo] = useState({});
    const [docs, setDocs] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadProducts(page);
    }, []);

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
    
        const { docs, ...productInfo } = response.data;
    
        setDocs(prevDocs => ([...prevDocs, ...docs]));
        setProductInfo(productInfo);
        setPage(page);
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

    loadMore = () => {
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        loadProducts(pageNumber);
    };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
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