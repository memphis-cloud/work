import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import {Button, ButtonDone} from "./components/Button";
import Counter from "./components/Counter";

class App extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
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