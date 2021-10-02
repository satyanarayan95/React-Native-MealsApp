import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import { CATAGORIES } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator";


const CatagoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
          <TouchableOpacity style={styles.gridItem} onPress={()=>{
              props.navigation.navigate({routeName:"CatagoryMeals"})
          }}>
            <View>
              <Text>{itemData.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      };
  return (
    <FlatList data={CATAGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CatagoriesScreen.navigationOptions = {
    headerTitle: 'Meals Catagories',
    headerStyle:{
        backgroundColor:Platform.OS=='android' ?Colors.primaryColor : ''
    },
    headerTintColor:Platform.OS=='android' ?'white':Colors.primaryColor 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CatagoriesScreen;
