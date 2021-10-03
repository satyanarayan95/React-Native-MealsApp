import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealsScreen from '../screens/CatagoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';


const MealsNavigator = createStackNavigator({
    Catagories:CatagoriesScreen,
    CatagoryMeals:{
        screen:CatagoryMealsScreen,
        navigationOptions:{
            headerTitle:"Meal Catagories",
        },
    },
    MealDetail: MealDetailsScreen,
},
{
    defaultNavigationOptions : {
        headerTitle: 'A Screen',
        headerStyle:{
            backgroundColor:Platform.OS=='android' ?Colors.primaryColor : ''
        },
        headerTintColor:Platform.OS=='android' ?'white':Colors.primaryColor 
    }
})

export default createAppContainer(MealsNavigator)