import React from 'react';
import ShopList from "./components/ShopList"


class App extends React.Component {
    state = {
        myInput: '',
        shoplist: [
            {
                 id: 0,
                 itemName: 'Этот элемент нулевой',
                isEnabled: 0,
            }
        ],
        count: 0
    }
    onChangeInput = (value) => {
        this.setState({ myInput: value})
    }
    onAdd = () => {
        const {myInput, shoplist, count} = this.state;
        shoplist.push({id: count + 1, itemName:myInput, isEnabled: false});
        this.setState({shoplist, myInput: '', count: this.state.count + 1})
    }
    deleteElement = id => {         
        this.setState(prevState => ({
          shoplist: prevState.shoplist.filter(el => el.id != id),
        }))
         
        // {console.log(this.refreshid());}
      }

    // toggleSwitch = id => {
    //     let selectedItemIndex = this.state.shoplist.findIndex(item => item.id === id);
    //     // console.log(this.state.shoplist.findIndex(item => item.id === id)) //2
    //     if (selectedItemIndex !== this.state.isEnabled) {
    //      this.setState({isEnabled: selectedItemIndex}); //undefined, 2
    //     //  console.log(this.setState({isEnabled: selectedItemIndex}))
    //     }else{
    //  this.setState({isEnabled: null});
    // }
    //   };
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