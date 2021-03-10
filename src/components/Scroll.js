import React from "react";
import {Text, TextInput, View, Dimensions, TouchableOpacity, ScrollView} from "react-native";

class Scroll extends React.Component{
    render(){
        const {shoplist, deleteElement} = this.props
        return(
                    <ScrollView
                    >
                        {
                            shoplist.map((item)=>(
                                <View
                                key={item.id}
                                style={{
                                    flex:1,
                                    flexDirection:'row',
                                    justifyContent:'space-between'
                                }}
                                >
                                    {item.id!=0&&<Text>
                                    {item.itemName}
                                    </Text>}
                                    <TouchableOpacity
                                     onPress={() => {deleteElement(item.id) }}
                                    >
                                    {item.id!=0 && <Text>
                                           Удалить
                                        </Text>}
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
        )
    }
}

export default Scroll;