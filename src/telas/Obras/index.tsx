import React from "react";
import { FlatList } from "react-native";
import lista_obras from "../../mocks/listaObras";

//layout das obras
import Item from "./item";

export default function Index({itens}:any) {
  return <FlatList
    data={lista_obras.obras.lista}
    renderItem={ ({item}:any)=> <Item cadaObra={item}/>}
    keyExtractor={(item)=>item.titulo}
  />
}