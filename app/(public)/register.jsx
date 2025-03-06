import { Text, View, Button, Pressable, TextInput, ImageBackground } from "react-native";
import { useSignUp } from '@clerk/clerk-expo'
import { useState } from 'react'
import { Link } from 'expo-router'
import { styles } from '../styles/styles'

export default function Register(){
  const { isLoaded, setActive, signUp } = useSignUp();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [pendingEmailCode, setPendingEmailCode] = useState(false);
  const [code, setCode] = useState("")

  async function handleSignUp(){
    if(!isLoaded) return

    try{
      await signUp.create({
        emailAddress: email,
        password: password
      })

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
      setPendingEmailCode(true);

    }catch(e){
      alert('Erro ao se cadastrar: verifique e-mail e senha.');
    }

  }


  async function handleVerifyUser(){
    if(!isLoaded) return;


      try{
        const completeSignup = await signUp?.attemptEmailAddressVerification({
          code
        })

        await setActive({ session: completeSignup.createdSessionId })

      }catch(e){
        alert('Erro na ativação da conta: Digite o código de verificação');
      }
  }

  return(
    <ImageBackground source={require('../../images/backgsignup.jpg')} style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
    <View style = {styles.view1}>
        {!pendingEmailCode && (
          <View>
            <Text style = {styles.texto1}>Criar uma conta</Text>

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
              title="Criar uma conta"
              color="#121212"
              onPress={handleSignUp}
            />

            <Link href="/login" asChild>
              <Pressable>
                <Text style = {styles.texto2}>Já possui uma conta? Faça o login</Text>
              </Pressable>
            </Link>
          </View>
        )}


{pendingEmailCode && (
          <View>
            <Text style={styles.texto2}>Digite o código enviado ao seu e-mail:</Text>
            <TextInput 
              autoCapitalize="none"
              placeholder="Digite o código aqui..."
              style={styles.textInput}
              value={code}
              onChangeText={setCode}
            />
            <Button
              title="Ativar conta"
              color="#121212"
              onPress={handleVerifyUser}
            />
          </View>
        )}

    </View>
    </ImageBackground>
  )
}
