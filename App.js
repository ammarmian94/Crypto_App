import React from 'react';
import CryptoDetails from './Src/Screens/CryptoDetails';
import Trasaction from './Src/Screens/Transaction'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './Src/Navigation/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {

  React.useEffect(()=>{
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='CryptoDetails' component={CryptoDetails} />
        <Stack.Screen name='Transaction' component={Trasaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
