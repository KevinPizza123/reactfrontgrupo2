import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const CarreraLista:FC <Props> = () => {

  const nav = useNavigation();

 return (
   <View>
    <Text> {/* Text = <p></p> */}
        Lista de carreras
    </Text>
    <Button 
      title='Nuevo'
      onPress={()=>nav.navigate("CarreraForm" as never )}
    />
   </View>
   
 )
}