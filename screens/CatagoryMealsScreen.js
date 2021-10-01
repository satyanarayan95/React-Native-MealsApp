import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native';

const CatagoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CatagoryMeals Screen</Text>
            <Button title="Go to Meals!" onPress = {()=>props.navigation.navigate({routeName:'CatagoryMeals'})} />
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
