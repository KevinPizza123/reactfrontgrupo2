import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const ProgramaLista:FC <Props> = () => {

  const nav = useNavigation();

 return (
   <View>
    <Text> {/* Text = <p></p> */}
        Lista de programas
    </Text>
    <Button 
      title='Nuevo'
      onPress={()=>nav.navigate("ProgramaForm" as never )}
    />
   </View>
   
 )
}