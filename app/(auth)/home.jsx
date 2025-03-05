import React, { useState } from 'react';
import { View, TextInput, Button, Text, ImageBackground } from 'react-native';
import { verificarLength } from '../functions/verificarLength'
import { useUser } from '@clerk/clerk-expo'
import { LogoutButton } from '../../components/log-out';
import { styles } from '../styles/styles';
import moment from 'moment';

const Inicio = () => {
  const [texto, setTexto] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const { user } = useUser()
  const usuario = String(user?.emailAddresses[0].emailAddress)

  const armazenarDados = async () => {
    try {
      const dataFormatada = moment(data, 'DD/MM/YYYY');
      if (!dataFormatada.isValid()) {
        alert('Digite a data no formato: DD/MM/AAAA!');
        return;
      }
      const chave = `dados-${Date.now()}`;
      const dados = { texto, valor, data, usuario };
      verificarLength(chave, dados, texto, valor, data, setValor, setData, setTexto)
    } catch (error) {
      alert('Houve um erro ao tentar guardar sua manutenção. Tente outra vez!');
    }
  };

  return (
    <ImageBackground source={require('../../images/backgroundHome.jpg')} style={{flex: 1}} >
      <LogoutButton/>
      <Text style = {{fontSize: 20, padding: 10, textAlign: 'center'}}>Usuário: {usuario}</Text>
      <View style = {styles.view3} >
        <View >
          <Text style = {styles.texto2} >Digite a manutenção:</Text>
          <TextInput style = {styles.textInput} value={texto} onChangeText={(text) => setTexto(text)} placeholder="Ex: Troca de óleo" />
          <Text style = {styles.texto2}>Valor:</Text>
          <TextInput
            style={styles.textInput}
            value={valor.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 2 })}
            onChangeText={(text) => setValor(text.replace(',', '.'))}
            placeholder="R$30,00"
            keyboardType="numeric"
          />
          <Text style = {styles.texto2}>Data da manutenção:</Text>
          <TextInput style={styles.textInput} value={data} onChangeText={(text) => setData(text)} placeholder="DD/MM/AAAA"/>
        </View>
        <Button color='black' title="Guardar manutenção" onPress={armazenarDados} />
      </View>
    </ImageBackground>
  );
};

export default Inicio;