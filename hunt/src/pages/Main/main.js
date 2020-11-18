import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import  {
    Container, 
    List, 
    ProductContainer, 
    ProductTitle, 
    ProductDescription, 
    ProductButton, 
    ProductButtonText } from  './styles';

const Main: () => React$Node = props => {

    const [productInfo, setProductInfo] = useState({});
    const [docs, setDocs] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadProducts(page);
    }, []);

    const loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
    
        const { docs, ...productInfo } = response.data;
    
        setDocs(prevDocs => ([...prevDocs, ...docs]));
        setProductInfo(productInfo);
        setPage(page);
    };

    const renderItem = ({ item }) => (
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

    const loadMore = () => {
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