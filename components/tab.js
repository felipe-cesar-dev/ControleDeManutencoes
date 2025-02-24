import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '@/app/(auth)/home';
import Lista from '@/app/(auth)/lista';


const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
      <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: 'rgba(65, 137, 57, 0.94)'}}>
        <Tab.Screen options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: 'white'
        }
        } name="Inserir Manutenções" component={Inicio}/>
        <Tab.Screen options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: 'white'
        }
        } name="Lista de Manutenções" component={Lista} />
      </Tab.Navigator>
  );
}