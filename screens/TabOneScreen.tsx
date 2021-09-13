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
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'I\'m bored', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#3D6DCC'
        }}
      />
      
        <Input placeholder='Participants'>Hello</Input>
        <Input placeholder='Participants'>Hello</Input>

        <Text h4 style={{color: '#fff'}}>{activity}</Text>
        <Text h4 style={{color: '#fff'}}>Participants: {participants}</Text>
        <Text h4 style={{color: '#fff'}}>Category: {category}</Text>
        <View>
          <Button
            title="Give me something to do, I'm bored"
            onPress={() => {
              getActivity()
            }}
          />
        </View>
  </ThemeProvider>
  );
}