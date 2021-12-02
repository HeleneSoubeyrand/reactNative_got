// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, } from 'react-native';
import { Modal, Provider } from '@ant-design/react-native'
import Character from './components/Character'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])

  return (
    <Provider>
      {character &&
        <Modal
          title="Title"
          transparent
          onClose={() => setCharacter(null)}
          visible
          closable
        >
          <Text>{character.fullName}</Text>
          <Text>{character.title}</Text>
          <Text>{character.family}</Text>
        </Modal>
      }
      <FlatList
        contentContainerStyle={styles.container}
        data={characters}
        renderItem={({ item }) => (
          <Character
            character={item}
            onPress={() => setCharacter(item) }
          />
        )}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;