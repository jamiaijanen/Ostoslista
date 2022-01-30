import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [item, setItem] = useState()
  const [allItems, setAllItems] = useState([])
  const [text, setText] = useState('Shopping List')

  const add = () => {
    setAllItems([...allItems, { key: item }])
    setItem()
  }

  const clear = () => {
    setAllItems([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={item => setItem(item)} value={item}/>
        <View style={styles.button}>
          <Button onPress={add} title='ADD'/>
          <Button onPress={clear} title='Clear'/>
        </View>
        <Text>
          {text}
        </Text>
      </View>
      <FlatList style={styles.list}
        data={allItems}
        renderItem={({item}) => 
        <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    flexDirection: 'row',
    margin: 20,
  }
});
