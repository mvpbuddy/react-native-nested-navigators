import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import TabScreen3 from './TabScreen3';
import TabScreen4 from './TabScreen4';
import ContactScreen from './ContactScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: 'blue', height: 100}}></View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>    
  );
}

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Contact Us" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

function HomeTabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        title: 'Hello',
        style:{height:40, paddingBottom: 10}
      }}
    >
      <Tab.Screen name="Tab-1" component={TabScreen1} />
      <Tab.Screen name="Tab-2" component={TabScreen2} />
      <Tab.Screen name="Tab-3" component={TabScreen3} />
      <Tab.Screen name="Tab-4" component={TabScreen4} />
    </Tab.Navigator>
  );
}

function Root({ navigation }) {
  let initialRoute = 'Splash';  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} headerMode="screen">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{
            title: '',
            headerShown: false   

          }}          
        />

        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{
            title: '',
            headerShown: false   

          }}          
        />

        <Stack.Screen 
          name="Drawer" 
          component={MyDrawer} 
          options={{
            title: '',
            headerShown: false          
          }}          
        />
        
        <Stack.Screen name="Home" component={HomeTabs} 
          options={{
            title: '',
            headerShown: false 
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;

