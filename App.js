// Updated App.js with navigation to handle Welcome screen
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/authScreens/login';
import Signup from './src/screens/authScreens/signup';
import Splash from './src/screens/authScreens/splash';
import Welcome from './src/screens/authScreens/welcome';
import Home from './src/screens/authScreens/home';
import Profile from './src/screens/authScreens/profile';
import Participation from './src/screens/authScreens/participation';
import Post from './src/screens/authScreens/post';
import Notifications from './src/screens/authScreens/notifications';
import VolunteerForm from './src/screens/authScreens/volunteerform';
import DisplayForm from './src/screens/authScreens/displayform';
import EngageForm from './src/screens/authScreens/engageform';
import PerformForm from './src/screens/authScreens/performform';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Participation' component={Participation} />
          <Stack.Screen name='Post' component={Post} />
          <Stack.Screen name='Notifications' component={Notifications} />
          <Stack.Screen name='VolunteerForm' component={VolunteerForm} />
          <Stack.Screen name='DisplayForm' component={DisplayForm} />
          <Stack.Screen name='EngageForm' component={EngageForm} />
          <Stack.Screen name='PerformForm' component={PerformForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;