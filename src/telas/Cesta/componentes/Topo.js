import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import Texto from '../../../componentes/Texto'
import topo from '../../../../assets/topo.png'


const width = Dimensions.get('screen').width

export default function Topo() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
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
})