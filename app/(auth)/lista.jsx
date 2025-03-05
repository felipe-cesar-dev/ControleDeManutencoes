import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { LogoutButton } from '@/components/log-out';
import { styles } from '../styles/styles';
import { useUser } from '@clerk/clerk-expo'

const Lista = () => {
  const [itensArmazenados, setItensArmazenados] = useState([]);
  const [itemExcluir, setItemExcluir] = useState('');
  const [valorTotal, setValorTotal] = useState(0);
  const { user } = useUser()
  const usuario = String(user?.emailAddresses[0].emailAddress)

  useFocusEffect(
    React.useCallback(() => {
      const recuperarItens = async () => {
        try {
          const chaves = await AsyncStorage.getAllKeys();
          const itens = await AsyncStorage.multiGet(chaves);
          const itensArmazenados = itens.map((item) => JSON.parse(item[1]));
          const itensFiltrados = itensArmazenados.filter((item) => item.usuario === usuario);
          setItensArmazenados(itensFiltrados);
          const valorTotal = itensFiltrados.reduce((acumulado, item) => {
            return acumulado + parseFloat(item.valor.replace('R$', ''));
          }, 0);
          setValorTotal(valorTotal.toFixed(2));
        } catch (error) {
          alert(error);
        }
      };
  
      recuperarItens();
    }, [usuario])
  );

  const excluirItem = async () => {
    try {
      const chaves = await AsyncStorage.getAllKeys();
      const itens = await AsyncStorage.multiGet(chaves);
      const itensArmazenados = itens.map((item) => JSON.parse(item[1]));
      const itemExcluirIndex = itensArmazenados.findIndex((item) => item.texto === itemExcluir);
      if (itemExcluirIndex !== -1) {
        const chaveExcluir = chaves[itemExcluirIndex];
        await AsyncStorage.removeItem(chaveExcluir);
        setItensArmazenados(itensArmazenados.filter((item) => item.texto !== itemExcluir));
        setItemExcluir('');
        const valorTotal = itensArmazenados.reduce((acumulado, item) => {
          return acumulado + parseFloat(item.valor.replace('R$', ''));
        }, 0);
        setValorTotal(valorTotal.toFixed(2));
      } else {
        alert('Digite uma manutenção válida!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ImageBackground source={require('../../images/backgroundHome.jpg')} style={{flex: 1}} >
      <LogoutButton/>
      <View style = {styles.viewLista}>
        <TextInput style = {styles.textInput2} value={itemExcluir} onChangeText={(text) => setItemExcluir(text)} placeholder="Digite a manutenção a ser excluída!" />
        <Button color='black' title="Excluir item" onPress={excluirItem} />
        <FlatList data={itensArmazenados} renderItem={({ item }) => (
          <View style = {styles.viewLista2}>
            <Text style = {styles.textLista}>Usuário: {item.usuario}</Text>
            <Text style = {styles.textLista}>Manutenção: {item.texto}</Text>
            <Text style = {styles.textLista}>Valor: R$ {item.valor}</Text>
            <Text style = {styles.textLista}>Data: {item.data} {'\n'}</Text>
          </View>
        )} keyExtractor={(item, index) => index.toString()} />
        <View style = {styles.viewLista3}>
          <Text style = {styles.textViewLista3}>Valor agregado das manutenções: R$ {valorTotal}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Lista;