import React from 'react';
import topo from '../../assets/topo.png'
import { StyleSheet, Image, Dimensions, Text } from 'react-native'

const width = Dimensions.get('screen').width

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
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
    padding: 80
  }
});