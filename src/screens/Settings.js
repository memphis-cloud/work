import React from 'react';
import { Text, View } from 'react-native';
class Settings extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>
                    This is settings screen
                </Text>
            </View>
        )
    }

}

export default Settings;