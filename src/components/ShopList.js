import React from "react";
import {Text, TextInput, View, Dimensions, TouchableOpacity, FlatList} from "react-native";
import Scroll from "./Scroll";
import Footer from "./Footer";

class ShopList extends React.Component{
    render(){
        const {shoplist, onAdd, onChangeInput} = this.props
        return(
            <View style={{
                flex:1
            }}>
            <Scroll
            shoplist={shoplist}
            />
            <Footer 
            onChangeInput={onChangeInput}
            onAdd={onAdd}
            />
            </View>
        )
    }
}

export default ShopList;