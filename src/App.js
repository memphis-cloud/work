import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import {Button, ButtonDone} from "./components/Button";
import Counter from "./components/Counter";

class App extends React.Component {
    state = {
        Name: "Start",
        Age: 1,
        temp: false
    }

    // increacse1 = () => {
    //     this.setState({count: this.state.count + 3})
    // }
    // increacse2 = () => {
    //     this.setState({count: this.state.count * 2})
    // }
    updatePeople = () => {
        this.setState({temp: true})
    }

    

    render() {
        console.log(this.state.count)
        if (this.state.temp) {
            return (
                <Text>{this.state.Name}, {this.state.Age}</Text>
            )
        }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {/* {this.state.count <= 20 && (<Counter count={this.state.count}/>)} */}
                {/* <Counter count={this.state.count} />
                {this.state.count <= 20 && (<Button increacse={this.increacse1}/>)}
                {this.state.count >= 20 && 
                <> 
                    <Button increacse={this.increacse2}/>
                </>
                }
                */}
                <Text>Name</Text>
                <TextInput value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
                <Text>Age</Text>
                <TextInput value={this.state.Age} onChangeText={Age => this.setState({Age})}/>
                <ButtonDone updatePeople={this.updatePeople}/>
            </View>
        )
    }
}

export default App;
/* 
ctrl + / - однострочный комментарий
shift + alt + a - многострочный комментарий
let - обьявление переменной;
" ", ' ' - нет разницы
` ` - в обратные ковычки можно вставлять переменные. Пример: alert( `результат: ${1 + 2}` ); // результат: 3 
Для доступа к информации внутри объекта метод может использовать ключевое слово this.
*/