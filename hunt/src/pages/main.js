import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';
import styled from 'styled-components';

const Container = styled.View`
    background-color: #fafafa;
    flex: 1;
`;
const List = styled.FlatList`
    padding: 20px;
`;
const ProductContainer = styled.View`
    background-Color: #fff;
    border-width: 1;
    border-color: #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;
const ProductTitle = styled.Text`
    font-Size: 18px;
    font-Weight: bold;
    color: #333;
`;
const ProductDescription = styled.Text`
    font-Size: 16px;
    color: #999;
    margin-Top: 5px;
    line-Height: 24px;
`;
const ProductButton = styled.TouchableOpacity`
    justifyContent: center;
    align-Items: center;
    height: 42px;
    border-Radius: 5px;
    border-Width: 2px;
    border-Color: #da552f;
    background-Color: transparent;
`;
const ProductButtonText = styled.Text`
    font-Size: 16px;
    color: #da552f;
`;



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
        <ProductContainer>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductDescription>{item.description}</ProductDescription>

            <ProductButton onPress={() => {
                props.navigation.navigate('Products', {product: item});
            }}>
                <ProductButtonText>Acessar!</ProductButtonText>
            </ProductButton>
        </ProductContainer>
    );

    loadMore = () => {
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        loadProducts(pageNumber);
    };

    return (
        <Container>
            <List
                data={docs}
                keyExtractor={item => item._id}
                renderItem={renderItem}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
            />
        </Container>
    );
};

Main['navigationOptions'] = screenProps => ({
    title: 'JSHunt'
});


export default Main;