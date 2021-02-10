import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home';
import List from './components/List';
import Actions from './components/Actions';
import Details from './components/Details';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={List}
        options={{ title: 'List', headerTitleAlign: 'center' }}
      />
      <ListStack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details', headerTitleAlign: 'center' }}
      />
    </ListStack.Navigator>
  );
};

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home', headerTitleAlign: 'center' }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details', headerTitleAlign: 'center' }}
      />
    </HomeStack.Navigator>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      // focus가 있으면 'home', 없으면 'home-outline'
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'List':
        iconName = focused ? 'list' : 'list-outline';
        break;
      case 'Actions':
        iconName = focused ? 'checkmark' : 'checkmark-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

// App 컴포넌트 시작
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Actions" component={Actions} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
