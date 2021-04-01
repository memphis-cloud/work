import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';
import ActButton from '../components/ActButton';
import ShopList from '../components/ShopList';
class Home extends React.Component {
    state = {
        myInput: '',
        shoplist: [
            {
                id: 0,
                itemName: '',
                isEnabled: false,
            }
        ],
        count: 0,
        forclear: 1,
    }

    counting = () => {
        this.persistState({ forclear: this.state.forclear + 1 })
    }

    uncounting = () => {
        this.persistState({ forclear: this.state.forclear - 1 })
    }

    onChangeInput = (value) => {
        this.setState({ myInput: value })
    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        try {
            const persistedStateShoplist = await AsyncStorage.getItem('shoplist');
            const persistedStateCount = await AsyncStorage.getItem('count');
            const persistedStateForclear = await AsyncStorage.getItem('forclear');
            if (!persistedStateShoplist && !persistedStateCount && !persistedStateForclear) return
            this.setState({
                shoplist: JSON.parse(persistedStateShoplist),
                count: JSON.parse(persistedStateCount),
                forclear: JSON.parse(persistedStateForclear),
            })
        } catch (e) {
            console.error(e)
        }
    }

    persistState = (newState) => {
        this.setState(newState, async () => {
            try {
                await AsyncStorage.setItem('shoplist', JSON.stringify(this.state.shoplist))
                await AsyncStorage.setItem('count', JSON.stringify(this.state.count))
                await AsyncStorage.setItem('forclear', JSON.stringify(this.state.forclear))
            } catch (e) {
                console.error(e)
            }
        })

    }
    navigateCreateProduct = () => {
        const { navigation } = this.props;
        navigation.navigate('secondScreen')
    }
    onAdd = () => {
        const { myInput, shoplist, count } = this.state;
        if (myInput != '') {
            shoplist.push({ id: count + 1, itemName: myInput, isEnabled: false });
            this.persistState({ shoplist, myInput: '', count: this.state.count + 1 })
        }
    }

    deleteElement = (id, index) => {
        this.persistState(prevState => ({
            shoplist: prevState.shoplist.filter(el => el.id != id),
        }));
        if (this.state.shoplist[index].isEnabled) {
            this.persistState({ forclear: this.state.forclear - 1 })
        }
    };
    allClear = () => {
        let arr = [
            {
                id: 0,
                itemName: '',
                isEnabled: false,
            }
        ];
        this.persistState({ shoplist: arr, count: 0, forclear: 1 })
        alert('Вы купили все, что было необходимо? Точно? Ну и отлично! (Любое развитие - хорошо, даже развитие паранойи © Рочев И. С.)')
    }

    render() {

        const { shoplist, forclear, myInput } = this.state
        return (
            <View style={{
                flex: 1
            }}>
                <ShopList
                    deleteElement={this.deleteElement}
                    shoplist={shoplist}
                    onAdd={this.onAdd}
                    onChangeInput={this.onChangeInput}
                    forclear={forclear}
                    counting={this.counting}
                    uncounting={this.uncounting}
                    allClear={this.allClear}
                    myInput={myInput}
                />
                <ActButton
                    onPress={this.navigateCreateProduct}
                />
            </View>
        )
    }
}

export default Home;