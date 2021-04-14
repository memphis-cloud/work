import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Switch, Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
class Scroll extends React.Component {
    render() {
        const { shoplist, deleteElement, counting, uncounting } = this.props;
        return (
            <View
                style={{
                    height: windowHeight - 70,
                    marginTop: -70,
                }}
            >
                <ScrollView
                >
                    {
                        shoplist.map((item, i, itemArray) => (
                            <View
                                key={item.id}
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: windowWidth,
                                    height: windowHeight * 0.1,
                                    alignItems: 'center'
                                }}
                            >
                                {item.id != 0 && <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    onValueChange={(toggleValue) => {
                                        itemArray[i].isEnabled = toggleValue; //true or false
                                        if (toggleValue) {
                                            counting();
                                        }
                                        else {
                                            uncounting();
                                        }
                                        this.setState({ shoplist: itemArray });
                                    }}
                                    value={item.isEnabled}
                                />}
                                {item.id != 0 && <Text
                                    style={{
                                        width: windowWidth * 0.7,
                                    }}>
                                    {item.itemName}
                                </Text>}
                                <TouchableOpacity
                                    onPress={() => { deleteElement(item.id, i) }}
                                >
                                    {item.id != 0 && <Text
                                    >
                                        Удалить
                                        </Text>}
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default Scroll;