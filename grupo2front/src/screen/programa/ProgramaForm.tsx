import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
}

export const ProgramaForm:FC <Props> = () => {

  const navigation = useNavigation();

 return (
   <>
    <View>
    <Text> {/* Text = <p></p> */}
        Formulario de programa
    </Text>
    <Button 
      title='Regresar a la lista'
      onPress={()=>navigation.navigate("ProgramaLista" as never)}
    />
   </View>
   </>
 )
}
