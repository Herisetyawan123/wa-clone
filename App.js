import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// pages
import MainScreen from './src/pages/Main';
import MyFloatingButton from './src/components/Home/FloatingButton';
import ChatsPage from './src/pages/Chats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
          },
          headerShadowVisible: false,
        }}>
        <Stack.Screen name='Whatsapp' component={MainScreen} options={{
          headerStyle: {
            backgroundColor: '#075e54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name='detail' component={ChatsPage} options={{
          headerStyle: {
            backgroundColor: '#075e54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
      <MyFloatingButton/>
    </NavigationContainer>
  );
}
