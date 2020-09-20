import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './src/styles/styles'



export default function App() {
const [val,setVal] = useState(0);
const [cont,setCont] = useState(0);

function Contador(){
  setCont(cont+1);
}

useEffect(()=>{
  setVal(val+2);
},[cont]);

  return (
    <View style={styles.container}>
      <Text style={styles.TextLabel}>
        Exemplo do uso do UseEffect
      </Text>
      <StatusBar style="auto" />

      <View style={styles.ContainerText}>
        <Text>utilização do useEffect</Text>
        <Text>
          {val}
        </Text>
      </View>

      <View style={styles.ContainerText}>
        <Text>utilização do useState</Text>
        <Text>
          {cont}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.ButtonCount}
        onPress={Contador}
      >
        <Text>Contador</Text>
      </TouchableOpacity>

    </View>
  );
}

