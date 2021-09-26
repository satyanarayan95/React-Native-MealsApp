import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMealsScreen from '../screens/CatagoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';


const MealsNavigator = createStackNavigator({
    Catagories:CatagoriesScreen,
    CatagoryMeals:{
        screen:CatagoryMealsScreen
    },
    MealDetail: MealDetailsScreen,
})

export default createAppContainer(MealsNavigator)