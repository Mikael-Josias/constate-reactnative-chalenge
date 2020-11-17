import React from 'react';
import { View, Text } from 'react-native';

const Main: () => React$Node = props => {
    return (
        <View>
            <Text>Página Main!</Text>
        </View>
    );
};

Main['navigationOptions'] = screenProps => ({
    title: 'JSHunt'
});

export default Main;