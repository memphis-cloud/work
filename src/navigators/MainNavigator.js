import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/Settings'
import Home from '../screens/Home'
const Tab = createBottomTabNavigator()

class MainNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='home'
                    options={{ title: 'Покупки' }}
                    component={Home}
                    initialParams={{}}
                />
                <Tab.Screen
                    name='settings'
                    options={{ title: 'Настройки' }}
                    component={Settings}
                />
            </Tab.Navigator>
        )
    }
}

export default MainNavigator