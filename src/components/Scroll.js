import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Switch} from "react-native";

class Scroll extends React.Component {
    render() {
        const { shoplist, deleteElement} = this.props
        return (
            <ScrollView
            >
                {
                    shoplist.map((item, i, itemArray) => (
                        <View
                            key={item.id}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                             {item.id!=0 &&<Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                // onChange={() => { toggleSwitch(item.id) }}
                                onValueChange={(toggleValue) =>{
                                    itemArray[i].isEnabled = toggleValue;
                                    {console.log(itemArray[i].isEnabled = toggleValue)}
                                    this.setState({shoplist: itemArray});
                                     {console.log(this.setState({shoplist}))}
                                }}
                                value={item.isEnabled}

                            /> }

                            {/* {item.id!=0 &&<PressSwitch 
                                    isEnabled={isEnabled}
                                    toggleSwitch={toggleSwitch}
                                    
                                    />} */}
                            {item.id != 0 && <Text>
                                {item.itemName}
                            </Text>}
                            <TouchableOpacity
                                onPress={() => { deleteElement(item.id) }}
                            >
                                {item.id != 0 && <Text>
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