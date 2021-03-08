import React from "react";
import {Text, TextInput, View, Dimensions, TouchableOpacity, ScrollView} from "react-native";

class Scroll extends React.Component{
    render(){
        const {shoplist} = this.props
        return(
                    <ScrollView
                    >
                        {
                            shoplist.map((item)=>(
                                <View
                                key={item.myInput}
                                style={{
                                    flex:1,
                                    flexDirection:'row',
                                    justifyContent:'space-between'
                                }}
                                >
                                    <Text>
                                    {item}
                                    </Text>
                                    <TouchableOpacity
                                    >
                                        <Text>
                                            Удалить
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                            
                        }
                    </ScrollView>
        )
    }
}

export default Scroll;