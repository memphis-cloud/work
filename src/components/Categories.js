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
        const { categories } = this.state
        return (
/*             <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}> */
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        categories.map((item) => (
                            <View style={{paddingTop:10, paddingRight:10, height: 70}}
                                key={item.name}>
                                <TouchableOpacity style={{padding: 12, borderColor: '#a0a0a0', borderRadius:20,borderWidth: 1}}>
                                    <Text style={{ color: 'black', fontSize: 20}}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            // </View>
        )
    }
}

export default Categories;