import React, { Component } from 'react';
import { Text } from 'react-native';

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            doubleCount: props.count
        }
    }

    componentDidMount(){
        console.log('MOUNT');
    }

    componentWillUnmount(){
        console.log('UNMOUNT');
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('DIDUPDATE', prevProps, this.props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render(){
        return(
            <Text>{this.props.count}</Text>
        )
    }
}

export default Counter;
