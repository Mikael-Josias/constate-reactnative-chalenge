import { createStackNavigator } from 'react-navigation';
import Main from './pages/Main/main';
import Products from './pages/Products/products';

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