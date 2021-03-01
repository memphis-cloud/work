import React from 'react';
import { TouchableOpacity, Text } from "react-native"

class ButtonPrev extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{position: 'absolute', bottom:220, left:120}} onPress={this.props.Prev}>
            <Text style={{
            }}>Prev</Text>   
     </TouchableOpacity>
        )
    }
}



export default ButtonPrev;