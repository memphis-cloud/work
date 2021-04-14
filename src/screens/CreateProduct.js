import React from 'react';
import { Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import { AppState } from '../Index'
const window1 = Dimensions.get("window").width;

class CreateProduct extends React.Component {
    state = {
        input: ''
    }
    render() {
        const { navigation } = this.props
        const { input } = this.state
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    margin: 6,
                    justifyContent: 'space-between',
                    position: 'relative',
                    bottom: 13,
                }}
            >
                <TextInput
                    style={{ height: 60, borderColor: 'gray', borderWidth: 1, width: window1 - 100 }}
                    onChangeText={(input) => this.setState({ input })}
                    value={input}
                />
                <AppState.Consumer>
                    {
                        ({ onAdd }) => (<TouchableOpacity
                            style={{ borderRadius: 25, borderWidth: 1, borderColor: '#a0a0a0', width: 85, height: 60, justifyContent: 'center' }}
                            onPress={() => {
                                onAdd(input)
                                navigation.navigate('home')
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20
                                }}
                            >
                                ОК
                    </Text>
                        </TouchableOpacity>)

                    }
                </AppState.Consumer>
            </View>
        )
    }
}
export default CreateProduct;