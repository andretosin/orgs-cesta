import React from 'react'
import Texto from '../../../componentes/Texto'
import logo from '../../../../assets/logo.png'
import { Image, StyleSheet, Dimensions, View } from 'react-native'

export default function Detalhes() {
  return <>
    <Texto style={estilos.nome}>Cesta de Verduras</Texto>
    <View style={estilos.fazenda}>
      <Image source={logo} style={estilos.imagemFazenda}/>
      <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
    </View>
    <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha</Texto>
  </>
}

const estilos = StyleSheet.create({

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold"
  }, 
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height: 32
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3",
    fontWeight: "bold"
  }, 
  preco: {
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "bold",
    color: "#2A9F85"
  }
});
