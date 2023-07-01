import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
}

export const ActividadForm:FC <Props> = () => {

  const navigation = useNavigation();

 return (
   <>
    <View>
    <Text> {/* Text = <p></p> */}
        Formulario de Actividad
    </Text>
    <Button 
      title='Regresar a la lista'
      onPress={()=>navigation.navigate("ActividadLista" as never)}
    />
   </View>
   </>
 )
}
