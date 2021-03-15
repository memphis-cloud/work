import React from "react";
import {View} from "react-native";
import Scroll from "./Scroll";
import Footer from "./Footer";

class ShopList extends React.Component{
    render(){
        const {shoplist, onAdd, onChangeInput, deleteElement, forclear, counting, uncounting} = this.props
        return(
            <View style={{
                flex:1,
                position: 'relative'
            }}>
            <Scroll
            shoplist={shoplist}
            deleteElement={deleteElement}
                counting={counting}
                uncounting={uncounting}
            />
            <Footer 
            onChangeInput={onChangeInput}
            onAdd={onAdd}
            forclear={forclear}
            shoplist={shoplist}
            />
            </View>
        )
    }
}

export default ShopList;