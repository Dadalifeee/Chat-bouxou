// Navigation/Navigation.js

import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Inputs from '../Components/input'
import SelectRoom from '../Components/SelectRoom'
import MessageScreen from '../Components/MessageScreen'

const SearchStackNavigator = createStackNavigator({
  Inputs: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Inputs,
    navigationOptions: {
      title: 'Login'
    }
  },
  SelectRoom: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: SelectRoom
  },
  MessageScreen: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: MessageScreen
  }
})

export default createAppContainer(SearchStackNavigator)