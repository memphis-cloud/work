import React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
class Footer extends React.Component {
    render() {
        const { forclear, shoplist, allClear } = this.props
        return (
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 600,
                    left: windowWidth * 0.325,
                }}
            >
                { (forclear == shoplist.length) && forclear != 1 &&
                    <TouchableOpacity
                        style={{

                        }}
                        onPress={allClear}
                    >
                        <Text>Завершить покупку</Text>
                    </TouchableOpacity>}
            </View>
        )
    }
}

export default Footer;

