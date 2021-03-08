import React from 'react';
import ShopList from "./components/ShopList"


class App extends React.Component {
    state={
        myInput: '',
        shoplist:[],
         count: 0,
        }
        counting = () =>{
            this.setState=({count: this.state.count + 1})
        }
    onChangeInput = (value) => {
        this.setState({ myInput: value})
    }
    onAdd = () => {
        this.setState(prevState => {
            return {
                myInput: '',
                shoplist: [...prevState.shoplist, prevState.myInput],
            }
        })
    };


    render() {
    
    const {shoplist} = this.state
        return (
            <ShopList 
            shoplist={shoplist}
            onAdd={this.onAdd}
            onChangeInput={this.onChangeInput}
            />
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
Взятие остатка от целочисленного деления %
Возведение в степень **. 2 ** 4 = 16
если бинарный оператор '+' применить к строкам, то он их объединяет в одну.

Сложение и преобразование строк — это особенность бинарного плюса +. 
Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.


*/