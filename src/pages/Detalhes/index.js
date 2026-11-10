import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Detalhes({ route }) {
  const navigation = useNavigation();

  navigation.setOptions({
    title: route.params?.vaga
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{route.params?.vaga}</Text>
      <Text style={styles.textos}>Salário: R$ {route.params?.salario.toFixed(2)}</Text>
      <Text style={styles.textos}>Descrição: {route.params?.desc}</Text>
      <Text style={styles.textos}>Contato: {route.params?.contato}</Text>

      <Button
        title="Voltar"
        color="maroon"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
