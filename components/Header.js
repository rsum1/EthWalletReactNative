import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AddKeyPair from './AddKeyPair';

const Header = ({title, addKeyPair}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => addKeyPair()}>
        <Icon name="plus" size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
