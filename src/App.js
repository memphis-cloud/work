import React from "react";
import {View} from "react-native";
import Categories from "./components/Categories";
import MainScreen from "./components/MainScreen";

class App extends React.Component {
    state={
        idCategory: 0
    }
    filtr = (value) =>{
        this.setState({idCategory: value})
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Categories filtr={this.filtr}
                
                />
                <MainScreen
                idCategory ={this.state.idCategory} />
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