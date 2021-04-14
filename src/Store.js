import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from './Index'
class Store extends React.Component {
    state = {
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

    componentDidMount() {
        this.init()
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


    onAdd = (newItemName) => {
        const { shoplist, count } = this.state;
        console.log(newItemName)
        if (newItemName !== '') {
            this.persistState({
                shoplist: [...shoplist, { id: count + 1, itemName: newItemName, isEnabled: false }],
                count: this.state.count + 1
            })
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
        return (
            <AppState.Provider
                value={{
                    shoplist: this.state.shoplist,
                    forclear: this.state.forclear,
                    count: this.state.count,
                    onAdd: this.onAdd,
                    deleteElement: this.deleteElement,
                    allClear: this.allClear,
                    counting: this.counting,
                    uncounting: this.uncounting
                }}
            >
                {
                    this.props.children
                }
            </AppState.Provider>
        )
    }
}

export default Store;