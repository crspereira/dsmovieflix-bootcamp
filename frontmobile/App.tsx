import React, { useState } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
//import * as SplashScreen from 'expo-splash-screen';

import Routes from './src/routes';
import { AuthContext } from './src/contexts/AuthContext';
import { isAuthenticated } from './src/core/utils/auth';

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isUserLogged, setIsUserLogged] = useState(setUserLogged() ? true : false)

  async function setUserLogged() {
    const isUserAuthenticated = await isAuthenticated()

    if (isUserAuthenticated)
      setIsUserLogged(true)
    else 
      setIsUserLogged(false)
  }

  const [ fontsLoaded ] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if(!fontsLoaded)
    return
    //SplashScreen.hideAsync();
    <AppLoading /> // Segura o app na splash screen até as fonts carregarem

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isUserLogged, setUserLogged }}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  )
}