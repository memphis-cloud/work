import React, { Component } from "react";
import {AppRegistry,  View, Image, StyleSheet,Text} from "react-native";
import ButtonNext from "./components/ButtonNext";
import ButtonPrev from "./components/ButtonPrev";

const styles = StyleSheet.create({
    picture:{
        width:250,
        height:250, 
    }
});

/*   let arr=[
    {image: 'https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg'},
    {image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH'},
]  */
/* let arr=["https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH"]
] ; */
/* let arr=[ 'https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYEOSL7bPdUuKSVL8W4eVeILes-D4PTYKrGUHsOgvDp_koobH' ] */
class App extends React.Component {
      state = {
        count:0
      }
      Next = () => {
          this.setState({count: this.state.count + 1})
      }
      Prev = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
           let arr=[
       "https://kto-ozvuchil.ru/wp-content/uploads/shrek2.jpg", "https://i.ytimg.com/vi/ZXocuhRWXYw/hqdefault.jpg",
        "data:image/jpeg;base64,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",
        "https://www.meme-arsenal.com/memes/cca1b4b5432594b04cb02c5bdf26193b.jpg"
];
let signature=['Шрек 1','Шрек 2','Шрек 3','Шрек 4']
        return (
            <View
            style={{
                flex:1,
                justifyContent: "center",
                 alignItems: "center" 
            }}>
            <Image style={styles.picture} 
            /* source = {arr[this.state.count].image} /> */
            source={{uri:arr[this.state.count]}}/>
            <Text>{signature[this.state.count]}</Text>
              {this.state.count<3  && <ButtonNext 
              Next={this.Next}
              />}
              {this.state.count>0 && <ButtonPrev Prev={this.Prev}/>}
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