import * as React from 'react';
import { Text, Header, Button, ThemeProvider, Input } from 'react-native-elements';
import { View } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';

export default function TabTwoScreen() {
  return (
    <View>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}