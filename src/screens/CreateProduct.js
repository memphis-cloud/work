import React from 'react';
import { Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
const window1 = Dimensions.get("window").width;

class EmptyPage extends React.Component {
    render() {
        const { forclear, shoplist, allClear, onChangeInput, onAdd, myInput } = this.props
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
                <Text>{ }</Text>
                <TextInput
                    style={{ height: 60, borderColor: 'gray', borderWidth: 1, width: window1 - 100 }}
                    onChangeText={onChangeInput}
                    value={myInput}
                />
                <TouchableOpacity
                    style={{ borderRadius: 25, borderWidth: 1, borderColor: '#a0a0a0', width: 85, height: 60, justifyContent: 'center' }}
                    onPress={onAdd}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        ОК
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default EmptyPage;