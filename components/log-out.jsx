import { useAuth } from '@clerk/clerk-expo'
import { Pressable, Text } from 'react-native';
import { Feather } from  '@expo/vector-icons'
export function LogoutButton(){
  const { signOut } = useAuth();

  function logout(){
    signOut();
  }

  return(
    <Pressable onPress={logout} style = {{flexDirection: 'row', backgroundColor: 'green', padding: 5, boxShadow:'0px 3px 9px 2px'}}>
        <Text style={{color: 'white', marginLeft:'85%', fontSize: 20}}>Sair </Text>
      <Feather name="log-out" size={24} color="white" />
    </Pressable>
  )
}