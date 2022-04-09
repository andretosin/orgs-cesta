import React from 'react'
import Texto from '../../../componentes/Texto'
import { Image, View, StyleSheet, FlatList } from 'react-native'

export default function Item({item: {nome, imagem}}) {
return <View style={estilos.item}>
  <Image source={imagem} style={estilos.imagem}/>
  <Texto style={estilos.nome}>{nome}</Texto>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 16
  },
  imagem: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: "#bbbbbb",
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646"
  }
})