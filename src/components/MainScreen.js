import React from 'react';
import { FlatList, View} from 'react-native';
import renderItem from "./renderItem"
//import Categories from "./Categories"
class MainScreen extends React.Component{
    state={
        subjects: [
            {
                product: 'https://www.officemag.ru/goods/620035/0f0e82360b64023a45768a5250f51553_xl.jpg',
                title: 'Святой источник'
            },
            {
                product: 'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/voda-piligrim-for-vending.jpg',
                title: 'Пилигрим'
            },
            {
                product: 'https://prostye-retsepty.com/wp-content/uploads/2015/06/zelenie-yabloki-polza-i-vred.jpg',
                title: 'Зеленые яблоки'
            }
        ]
    }
    render(){
        const {subjects} = this.state;
        return(
            // <View>
             <FlatList
                data={subjects}
                renderItem={renderItem}
                keyExtrator={item => item.product}
                />
            // </View>
        )
    }
}

export default MainScreen;