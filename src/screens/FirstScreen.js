import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import Home from './Home';
import SecondPage from './SecondPage';
const Tab = createBottomTabNavigator();
class FirstScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Tab.Navigator>
                    <Tab.Screen tile="Home" name="Home" component={Home} />
                    <Tab.Screen tile="Second page" name="SecondPage" component={SecondPage} />
                </Tab.Navigator>
            </View>
        )
    }
}

export default FirstScreen;