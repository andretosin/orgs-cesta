import React from 'react'
import Texto from '../../../componentes/Texto'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Detalhes({nome, nomeFazenda, logoFazenda, descricao, preco, botao}) {
  return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda}/>
      <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
    <Texto style={estilos.preco}>{preco}</Texto>
    <TouchableOpacity style={estilos.botao}>
      <Texto style={estilos.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
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
  }, 
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  },
  textoBotao: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF"
  }
});
