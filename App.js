import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [keyPair, getKeyPair] = useState([
    {id: uuidv4(), text: 'keyPair1'},
    {id: uuidv4(), text: 'keyPair2'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Ethereum Address" />
      <FlatList
        data={keyPair}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
