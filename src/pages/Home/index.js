import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import vagas from '../../vagas';

export default function Home() {
  const navigation = useNavigation();

  function saibaMais(vaga) {
    navigation.navigate('Detalhes', vaga);
  }

  return (
    <ScrollView style={styles.container}>
      {vagas.map((item) => {
        return (
          <View key={item.id} style={styles.box}>
            <Text style={styles.titulo}>{item.vaga}</Text>
            <Button
              title="Saiba mais"
              color="maroon"
              onPress={() => saibaMais(item)}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
