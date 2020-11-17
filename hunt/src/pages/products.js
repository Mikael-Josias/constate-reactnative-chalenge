import React from 'react';
import { WebView } from 'react-native-webview';

const Products = ({navigation}) => {
    return <WebView source={{uri: navigation.state.params.product.url}} />;
}

Products.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.product.title
});

export default Products;