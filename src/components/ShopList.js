import React from "react";
import { View } from "react-native";
import Scroll from "./Scroll";
import Footer from "./Footer";

class ShopList extends React.Component {
    render() {
        const { shoplist, deleteElement, forclear, counting, uncounting, allClear, myInput } = this.props
        return (
            <View style={{
                flex: 1,
                position: 'relative'
            }}>
                <Scroll
                    shoplist={shoplist}
                    deleteElement={deleteElement}
                    counting={counting}
                    uncounting={uncounting}
                />
                <Footer
                    forclear={forclear}
                    shoplist={shoplist}
                    allClear={allClear}
                />
            </View>
        )
    }
}

export default ShopList;