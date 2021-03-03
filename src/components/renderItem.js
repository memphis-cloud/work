import React, { Component } from "react";
import { AppRegistry, View, Image, StyleSheet, Text, ScrollView, FlatList } from "react-native";

const renderItem = ({ item }) => (
    <View>
        <Image style={{ width: 300, height: 300 }}
            source={{ uri: item.product }}
        />
        <Text>{item.title}</Text>
        </View>
)

export default renderItem;