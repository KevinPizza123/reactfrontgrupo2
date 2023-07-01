import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const ProyectoLista:FC <Props> = () => {

  const nav = useNavigation();

 return (
   <View>
    <Text> {/* Text = <p></p> */}
        Lista de proyectos
    </Text>
    <Button 
      title='Nuevo'
      onPress={()=>nav.navigate("ProyectoForm" as never )}
    />
   </View>
   
 )
}