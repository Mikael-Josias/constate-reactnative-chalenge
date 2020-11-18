import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
    background-color: #fafafa;
    flex: 1;
`;

export const List = styled.FlatList`
    padding: 20px;
`;

export const ProductContainer = styled.View`
    background-Color: #fff;
    border-width: 1;
    border-color: #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;

export const ProductTitle = styled.Text`
    font-Size: 18px;
    font-Weight: bold;
    color: #333;
`;

export const ProductDescription = styled.Text`
    font-Size: 16px;
    color: #999;
    margin-Top: 5px;
    line-Height: 24px;
`;

export const ProductButton = styled.TouchableOpacity`
    justifyContent: center;
    align-Items: center;
    height: 42px;
    border-Radius: 5px;
    border-Width: 2px;
    border-Color: #da552f;
    background-Color: transparent;
`;

export const ProductButtonText = styled.Text`
    font-Size: 16px;
    color: #da552f;
`;