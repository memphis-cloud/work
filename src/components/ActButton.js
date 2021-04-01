import React from 'react';
import ActionButton from 'react-native-action-button';

class ActButton extends React.Component {


    render() {
        return (

            <ActionButton buttonColor="rgba(231,76,60,1)"
                onPress={this.props.onPress}
            // verticalOrientation={'down'}
            />

        )
    }
}

export default ActButton;