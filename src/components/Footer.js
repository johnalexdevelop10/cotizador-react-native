import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../utils/color';
export default function Footer(props) {
    const {calculate} = props;
  return (
    <View  style={styles.viewFooter}>
     <TouchableOpacity style={styles.button} onPress={calculate}>
     <Text style={styles.text}>CALCULAR</Text>
     </TouchableOpacity>
   
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter: {
        // position abs= para posocionar abajo
      position: 'absolute',
    //   botom= se va abajo
      bottom: 0,
      width: '100%',
      backgroundColor: color.PRIMARY_COLOR,
      height: 100,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: color.PRIMARY_COLOR_DARK,
      padding: 16,
      borderRadius: 20,
      width: '75%',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
    },
  });