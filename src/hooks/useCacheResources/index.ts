import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync(): Promise<void> {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        const loadAsync = await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('assets/fonts/SpaceMono-Regular.ttf'),
          'source-pro-light': require('assets/fonts/SourceSansPro-Light.ttf'),
          'source-pro-regular': require('assets/fonts/SourceSansPro-Regular.ttf'),
          'source-pro-semibold': require('assets/fonts/SourceSansPro-SemiBold.ttf'),
        });

        return loadAsync;
      } catch (e) {
        throw new Error(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
