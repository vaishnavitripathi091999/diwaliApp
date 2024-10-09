import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <Image 
        source={require('../../../assets/images/splashArt.png')}
         resizeMode='contain'

        />
      
      <Text>Melbourne Diwali</Text>
      <Pressable onPress={()=> navigation.navigate('Welcome') }>
            <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
    

})