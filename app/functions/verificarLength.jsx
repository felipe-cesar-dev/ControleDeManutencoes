import AsyncStorage from "@react-native-async-storage/async-storage";

export async function verificarLength(chave, dados, texto, valor, data, a, b, c){
    if (texto.length === 0 || valor.length === 0 || data.length === 0) {
        alert('Por favor, preencha todos os campos!');
        return;
      } else {
        await AsyncStorage.setItem(chave, JSON.stringify(dados));
        alert('Manutenção guardada!')
        a('')
        b('')
        c('')
      }
}