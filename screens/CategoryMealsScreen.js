import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text>THE CATEGORY MEALS SCREEN</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.pop()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CategoryMealsScreen
