import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

class Button extends React.Component{
state ={
    name: "Igor"
}

    render(){
        return(
            <TouchableOpacity onPress={() => { this.props.swap(this.state.name)}}>
                <Text>
                    Press me
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Button;