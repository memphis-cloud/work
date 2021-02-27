import React from "react";
import { View, Text } from "react-native";
import Button from "./component/Button";

class App extends React.Component {
    state = {
        count: 0
    }

    increacse = () => {
        this.setState({count: this.state.count + 3})
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>{this.state.count}</Text>
                <Button increacse={this.increacse} />
            </View>
        )
    }
}

export default App;
