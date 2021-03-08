import React from "react";
import { Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
const window1 = Dimensions.get("window").width;
class Footer extends React.Component {
    render() {
        const {onChangeInput, onAdd} = this.props
        return (           
            <View
            style={{
                flex:1,
                flexDirection:'row',
                alignItems: 'flex-end',
                 margin:5,
                justifyContent:'space-between'
            }}
            >
            <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: window1 - 100 }}
            onChangeText={onChangeInput}
            />
            <TouchableOpacity
            style ={{borderRadius:20,borderWidth: 1,  borderColor: '#a0a0a0', width: 85, height: 50}}
            onPress={onAdd}
            >
                <Text>ОК</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default Footer;

