import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
}

export const CarreraForm:FC <Props> = () => {

  const navigation = useNavigation();

 return (
   <>
    <View>
    <Text> {/* Text = <p></p> */}
        Formulario de carrera
    </Text>
    <Button 
      title='Regresar a la lista'
      onPress={()=>navigation.navigate("CarreraLista" as never)}
    />
   </View>
   </>
 )
}
