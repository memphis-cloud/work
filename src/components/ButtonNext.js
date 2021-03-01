import React from 'react';
import { TouchableOpacity, Text } from "react-native"

class ButtonNext extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{position: 'absolute', bottom:220, right:120}} onPress={this.props.Next}>
            <Text>Next</Text>   
     </TouchableOpacity>
        )
    }
}
export default ButtonNext;