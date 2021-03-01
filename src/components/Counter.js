import React from "react";
import {Text} from "react-native";

class Counter extends React.Component{
    render(){
        return(
        <Text>{this.props.count}</Text>
        )
    }
}