import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCachedResources } from '@hooks/index';
import Home from '@screens/HomeScreen';

export default function Root():JSX.Element | null {
  const isLoadingComplete = useCachedResources();

  if (!(isLoadingComplete)) return null;

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
