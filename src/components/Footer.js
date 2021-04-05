import React from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
const window1 = Dimensions.get("window").width;
class Footer extends React.Component {
    render() {
        const { forclear, shoplist, allClear } = this.props
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
                { (forclear == shoplist.length) && forclear != 1 &&
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            position: 'absolute',
                            bottom: 70,
                            left: window1 * 0.3
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

