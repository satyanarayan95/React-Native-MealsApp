import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { MEALS } from "../data/dummy-data";

const CatagoryMealsScreen = props => {
    const catId = props.navigation.getParam('catagoryId');
  const displayMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId)>=0)

    const renderMealitems = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>)
    }



    return (
        <View style={styles.screen}>
            <FlatList data={displayMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMealitems} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CatagoryMealsScreen;
