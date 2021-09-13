import React, { useState } from "react";
import { Text, Header, Button, ThemeProvider, Input } from 'react-native-elements';
import { View } from "react-native";
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [activity, setActivity] = useState()
  const [participants, setParticipants] = useState()
  const [category, setCategory] = useState()
  

  async function getActivity() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    const bored = await response.json()
    setActivity(bored.activity)
    setParticipants(bored.participants)
    setCategory(bored.type)
    console.log(bored)
  }

  return (
    <ThemeProvider>  
        <Input placeholder='Participants'></Input>
        <Input placeholder='Category'></Input>
  </ThemeProvider>
  );
}