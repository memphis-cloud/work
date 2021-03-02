import React, { Component } from "react";
import {AppRegistry,  View, Image, StyleSheet,Text} from "react-native";
import Categories from "./components/Categories";

/*   let arr=[
    {image: 'https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg'},
    {image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH'},
]  */
/* let arr=["https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH"]
] ; */
/* let arr=[ 'https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH' ] */
class App extends React.Component {
    render() {
        return (
            <Categories />
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