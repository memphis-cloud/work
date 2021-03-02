import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from "react-native"

class Categories extends React.Component {
    state = {
        categories: [
            {
                name: 'Вода'
            },
            {
                name: 'Фрукты'
            },
            {
                name: 'Крупы'
            }
        ]
    }

    render() {
        const { categories } = this.state
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ScrollView horizontal={true}>
                    {
                        categories.map((item) => (
                            <View
                                key={item.name}>
                                <TouchableOpacity style={{padding:12, borderColor: 'black', borderRadius:10,borderWidth: 1}}>
                                    <Text style={{ color: 'red' }}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default Categories;