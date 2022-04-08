import React from 'react';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'

const width = Dimensions.get('screen').width

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>

    <View style={estilos.cesta}>
      <Text style={estilos.nome}>Cesta de Verduras</Text>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda}/>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
      </View>
      <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha</Text>
      <Text style={estilos.preco}>R$40,00</Text>
    </View>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width
  },
  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: "100%",
    fontSize: 25,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 70
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold"
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
    fontFamily: "MontserratRegular"
  },
  descricao: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3"
  }, 
  preco: {
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "bold",
    color: "#2A9F85"
  }
});