import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Login';
import { HomeTab } from './HomeTab';

interface Props {
}

const Stack = createNativeStackNavigator();

export const MainStack:FC <Props> = () => {


 return (
    <Stack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
 )
}