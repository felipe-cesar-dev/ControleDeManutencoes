import { Text, View, Button, Pressable, TextInput, ImageBackground } from "react-native";
import { useSignIn } from '@clerk/clerk-expo'
import { useState } from 'react'
import { Link } from 'expo-router'
import { styles } from '../styles/styles'
import verificarLengthLogin from "../functions/verificarLengthLogin";

export default function Login(){
  const { isLoaded, setActive, signIn } = useSignIn();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn(){
    if(!isLoaded) return;
    verificarLengthLogin(email, password)
    try{

      const signinUser = await signIn.create({
        identifier: email,
        password: password
      })

      await setActive({ session: signinUser.createdSessionId })

    }catch(err){
      console.log(JSON.stringify(err, null, 2));
    }

  }

  return(
    <ImageBackground source={require('../../images/singinbackg.jpeg')} style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View style = {styles.view1}>
      <Text style = {styles.texto1}>Acessar conta</Text>

      <TextInput
        style = {styles.textInput}
        autoCapitalize="none"
        placeholder="Digite seu email..."
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style = {styles.textInput}
        autoCapitalize="none"
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Acessar"
        color="#121212"
        onPress={handleSignIn}
      />

      <Link href="/register" asChild>
        <Pressable>
          <Text style = {styles.texto2}>Toque aqui para se cadastrar!</Text>
        </Pressable>
      </Link>

    </View>
    
    </ImageBackground>
  )
}

