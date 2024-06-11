import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 35}}>Contas a Pagar</Text>
      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Descrição aqui'
      />
      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Valor aqui'
      />
      <Button
        title="Cadastrar"
        onPress={()=>{}}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  caixaDeTexto:{
    borderWidth: 1,
    width: "90%",
    padding: 10,
    margin: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
});
