import React from "react";
import {View} from "react-native";
import Scroll from "./Scroll";
import Footer from "./Footer";

class ShopList extends React.Component{
    render(){
        const {shoplist, onAdd, onChangeInput, deleteElement} = this.props
        return(
            <View style={{
                flex:1
            }}>
            <Scroll
            shoplist={shoplist}
            deleteElement={deleteElement}
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