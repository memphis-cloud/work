import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from "react-native"
import MainScreen from "./MainScreen"
class Categories extends React.Component {
    state = {
        categories: [
            {
                name: 'Вода',
                idCategory: 1
            },
            {
                name: 'Фрукты',
                idCategory: 2
            },
            {
                name: 'Крупы'
            },
            {
                name: 'Колбаса и сосиски'
            },
            {
                name: 'Овощи'
            }
        ]
    }

    render() {
        const {filtr} = this.props
        const { categories } = this.state
        return (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        categories.map((item) => (
                            <View style={{paddingTop:10, paddingRight:10, height: 70}}
                                key={item.name}>
                                <TouchableOpacity style={{padding: 12, borderColor: '#a0a0a0', borderRadius:20,borderWidth: 1}}
                                onPress={{filtr}}>
                                    <Text style={{ color: 'black', fontSize: 20}}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
        )
    }
}

export default Categories;