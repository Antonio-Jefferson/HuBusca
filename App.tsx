import { Provider } from 'react-redux';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './src/Store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Perfil" 
            component={Profile} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
