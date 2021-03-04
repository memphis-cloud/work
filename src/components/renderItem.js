import React, { Component } from "react";
import {  View, Image,  Text, Dimensions } from "react-native";
const window1 = Dimensions.get("window").width;
const renderItem = ({ item }) => (
    <View>
        <Image style={{ width: window1-20, height: 400}}
            source={{ uri: item.product }}
        />
        <Text style={{textAlign: "center",padding: 10, bottom: 40, backgroundColor: "#808080", opacity: 0.8, color: "black"}}>{item.title}</Text>
        <Text>{this.props.idCategory}</Text>
        </View>
)

export default renderItem;