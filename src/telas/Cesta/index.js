import React from 'react';
import Topo from '../Cesta/componentes/Topo'
import Detalhes from '../Cesta/componentes/Detalhes'
import { StyleSheet, Dimensions, View } from 'react-native'

const width = Dimensions.get('screen').width

export default function Cesta({topo, detalhes}) {
  return <>
    <Topo {...topo}/>
    <View style={estilos.cesta}>
      <Detalhes {...detalhes}/>
    </View>
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
})
