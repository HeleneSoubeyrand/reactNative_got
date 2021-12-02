import React from 'react'
import { Pressable, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  characterContainer: {
    marginBottom: 20
  }, 
  image: {
    width: 150,
    height: 150
  },
  name: {
    color: 'white',
  }
})

const Character = ({ character, onPress }) => {
  return (
    <Pressable 
      style={styles.characterContainer}
      onPress={onPress} 
    >
      <Image
        style={styles.image}
        source={{
          uri: character.imageUrl
        }}
      />
      <Text style={styles.name}>{character.fullName}</Text>
    </Pressable>
  )
}


export default Character