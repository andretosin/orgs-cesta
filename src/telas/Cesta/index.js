import React from 'react';
import Topo from '../Cesta/componentes/Topo'
import Detalhes from '../Cesta/componentes/Detalhes'
import Item from './componentes/Item'
import { StyleSheet, Dimensions, View, ScrollView, FlatList } from 'react-native'
import Texto from '../../componentes/Texto'
const width = Dimensions.get('screen').width

export default function Cesta({topo, detalhes, itens}) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo}/>
          <View style={estilos.cesta}>
          <Detalhes {...detalhes}/>
          <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      }}
    />
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  titulo: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8
  },
})
