import React from "react";
import { Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
const window1 = Dimensions.get("window").width;
class Footer extends React.Component {
    render() {
        const {onChangeInput, onAdd, forclear, shoplist} = this.props
        return (           
            <View
            style={{
                flex:1,
                flexDirection:'row',
                alignItems: 'flex-end',
                 margin:6,
                justifyContent:'space-between',
                position:'relative',
                  bottom: 13,
                //  top:10,
                //  top: 200,
                // shadowOffset: { width: 100, height: 100},
                // shadowColor: '#000',
                // shadowOpacity: 1,
                // elevation: 10,
                // backgroundColor : "#0000",
                // //  elevation: 1,
                // //   position:'absolute',
                    //    backgroundColor: 'red',
                //  op:600
            }}
            >
                {(forclear==shoplist.length) && forclear!=1 && <TouchableOpacity
                                style={{
                                    flex:1,
                                     position:'absolute',
                                    // alignContent:'center',
                                    // justifyContent:'center',
                                     bottom:70,
                                     left:window1*0.3
                                }}
                                // onPress={}
                                >
                <Text>Завершить покупку</Text>
                </TouchableOpacity>}
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

