import React from 'react'
import Texto from '../../../componentes/Texto'
import { Image, View, StyleSheet, ScrollView } from 'react-native'

export default function Itens({titulo, lista}) {
  return <ScrollView>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    {lista.map(({nome, imagem}) => {
      return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
      </View>
    })}
  </ScrollView>
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center"
  },
  imagem: {
    width: 46,
    height: 46
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646"
  }
})