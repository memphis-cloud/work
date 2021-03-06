import React from 'react';
import { TouchableOpacity, Text } from "react-native"

class Button extends React.Component{
    render(){

        return(
            <TouchableOpacity onPress={this.props.increacse}>
                   <Text>Press me</Text>   
            </TouchableOpacity>
        )
    }
}

export class ButtonDone extends React.Component{
    
    render(){
        return(
            <TouchableOpacity onPress={this.props.updatePeople}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }

}


export default Button;