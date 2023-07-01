import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogOut } from './LogOut';
import { ActividadStack } from '../actividad/ActividadStack';
import { CarreraStack } from '../carrera/CarreraStack';
import { LineaStack } from '../linea_investigacion/LineaStack';

interface Props {
}

const Tab = createBottomTabNavigator();

export const HomeTab:FC <Props> = () => {
 return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Tab.Screen name="ActividadStack" component={ActividadStack} />
      <Tab.Screen name="CarreraStack" component={CarreraStack} />
      <Tab.Screen name="LineaStack" component={LineaStack} />
      <Tab.Screen name="ProgramaStack" component={CarreraStack} />
      <Tab.Screen name="ProyectoStack" component={ActividadStack} />
      
      <Tab.Screen name="LogOut" component={LogOut} />
    </Tab.Navigator>
 )
}
