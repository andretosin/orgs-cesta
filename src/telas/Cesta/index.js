import React from 'react';
import Topo from '../Cesta/componentes/Topo'
import Detalhes from '../Cesta/componentes/Detalhes'
import Itens from './componentes/Itens'
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native'

const width = Dimensions.get('screen').width

export default function Cesta({topo, detalhes, itens}) {
  return <ScrollView>
    <Topo {...topo}/>
    <View style={estilos.cesta}>
      <Detalhes {...detalhes}/>
      <Itens {...itens}/>
    </View>
  </ScrollView>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
})
