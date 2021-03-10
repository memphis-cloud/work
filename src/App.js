import React from 'react';
import ShopList from "./components/ShopList"


class App extends React.Component {
    state = {
        myInput: '',
        shoplist: [
            {
                id: '',
                itemName: '',
            }
        ],
    }
    onChangeInput = (value) => {
        this.setState({ myInput: value})
    }
    onAdd = () => {
        const {myInput, shoplist} = this.state;
        shoplist.push({id: shoplist.length + 1, itemName:myInput});
        this.setState({shoplist, myInput: ''})
    }

    deleteElement = id => {
        this.setState(prevState => ({
          shoplist: prevState.shoplist.filter(el => el.id != id)
        }))
      }


    render() {
        const { shoplist} = this.state
        return (
            <ShopList
                deleteElement={this.deleteElement}
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
Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа. */