import React from "react";
import {View} from "react-native";
import Button from "./components/Button"
import Counter from "./components/Counter"



class App extends React.Component{
    state = {
        count:0;
    }
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}
            >
            <Text>{this.state.count}</Text>
            <Button/>
            </View>
        )
    }
}

export default App;
