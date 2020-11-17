import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Products from './pages/products';

export default createStackNavigator({
    Main,
    Products,
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#da552f",
        },
        headerTintColor: "#fff"
    },
});