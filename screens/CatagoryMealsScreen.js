import react from 'react'
import {View,Text,StyleSheet} from 'react-native';

const CatagoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CatagoryMeals Screen</Text>
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
