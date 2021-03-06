import React from "react";
import {View, Text} from "react-native";
import Button from "./components/Button"
import Name2 from "./components/Name2";
class App extends React.Component {

state ={
    name: "Oleg",
    count:0
}
increacse = (value) => {
    this.setState({name: value})
}
    render() {
        return (
            <View 
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center"
            }}
            >
                <Text>
                    {/* {this.state.name} */}
                </Text>
                <Button swap={this.increacse}/>
                <Name2 name={this.state.name}/>
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