import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FirstScreen from './screens/FirstScreen';
import EmptyPage from './screens/EmptyPage';
const Stack = createStackNavigator();


class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="firstScreen" component={FirstScreen} />
                    <Stack.Screen name="secondScreen" component={EmptyPage} />
                </Stack.Navigator>
            </NavigationContainer>
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