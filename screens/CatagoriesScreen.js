import React from "react";
import {
  StyleSheet,
  FlatList, 
} from "react-native";
import CatagoryGridTile from "../components/CatagoryGridTile";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator";


const CatagoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
          <CatagoryGridTile 
          title ={itemData.item.title}
          onSelect={() => {
            props.navigation.navigate({
              routeName:"CatagoryMeals",
              params:{
                catagoryId:itemData.item.id
              }
          })
          }}
          color={itemData.item.color}
          />
        );
      };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CatagoriesScreen.navigationOptions = {
  headerTitle:MealsNavigator,
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatagoriesScreen;
