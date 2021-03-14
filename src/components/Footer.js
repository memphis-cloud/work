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
                 margin:6,
                justifyContent:'space-between',
                bottom: 10,
                // shadowOffset: { width: 100, height: 100},
                // shadowColor: '#000',
                // shadowOpacity: 1,
                // elevation: 10,
                // backgroundColor : "#0000",
                // //  elevation: 1,
                // //   position:'absolute',
                //     backgroundColor: 'red',
                //  top:600
            }}
            >
            <TextInput
            style={{ height: 60, borderColor: 'gray', borderWidth: 1, width: window1 - 100 }}
            onChangeText={onChangeInput}
            />
            <TouchableOpacity
            style ={{borderRadius:25,borderWidth: 1,   borderColor: '#a0a0a0', width: 85, height: 60, justifyContent:'center'}}
            onPress={onAdd}
            >
                <Text
                style={{
                    textAlign:'center',
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

export default Footer;

