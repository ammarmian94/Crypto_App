import React from 'react';
// import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
// import {COLORS, FONTS, SIZES} from '../Constants/Theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="PortFolio" component={Home} />
      <Tab.Screen name="Transaction" component={Home} />
      <Tab.Screen name="Prices" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//     shadow:{
//         shadowColor: COLORS.primary,
//         shadowOffset: {
//             width: 0, 
//             height: 10
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5
//     }
// });

export default Tabs;
