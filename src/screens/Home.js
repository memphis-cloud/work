
import React from 'react';
import { View } from 'react-native';
import ActButton from '../components/ActButton';
import ShopList from '../components/ShopList';
import { AppState } from '../Index'
class Home extends React.Component {
    navigateCreateProduct = () => {
        const { navigation } = this.props;
        navigation.navigate('create-product')
    }
    render() {
        return (

            <View style={{
                flex: 1
            }}>

                <AppState.Consumer>
                    {
                        ({ shoplist, forclear, counting, uncounting, deleteElement, allClear }) => (
                            <View>
                                <ShopList
                                    deleteElement={deleteElement}
                                    shoplist={shoplist}
                                    forclear={forclear}
                                    counting={counting}
                                    uncounting={uncounting}
                                    allClear={allClear}
                                />
                            </View>
                        )

                    }

                </AppState.Consumer>
                <ActButton
                    onPress={this.navigateCreateProduct}
                />
            </View>
        )
    }
}

export default Home;