import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem'
//import {wallet} from 'eth-wallet-light'

const App = () => {
  const [keyPair, getKeyPair] = useState([
    {id: uuidv4(), text: 'keyPair1'},
    {id: uuidv4(), text: 'keyPair2'},
  ]);

  const addKeyPair = (keyPair) => {
    console.log('loggy')
    getKeyPair(prevKeyPairs => {
    return [{id: uuidv4(), text: 'newwww'},...prevKeyPairs]
  })
}
  return (
    <View style={styles.container}>
      <Header title="Ethereum Address" addKeyPair={addKeyPair}/>
      <FlatList
        data={keyPair}
        renderItem={({item}) => <ListItem item={item} />}
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
