import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 35}}>Contas a Pagar</Text>
      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Descrição aqui'
        onChangeText={(texto)=>setDescricaoDigitada(texto)}
      />

      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Valor aqui'
        onChangeText={(texto)=>setValorDigitado(texto)}
      />
      <Button
        title="Cadastrar"
        onPress={()=>{cadastrarConta(descricaoDigitada, valorDigitado)}}
      />
      <ScrollView style={{width:"100%"}}>
        {/* Mapear os dados e dividir em itens */}
        {dados.map((item)=>(
            <View style={styles.caixaContas}>
              <Text>{item.coluna_descricao}</Text>
              <Text>R$ {item.coluna_valor}</Text>
              <Text> {item.coluna_status} </Text>
            </View>
        ))}
      </ScrollView>
      

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  caixaContas:{
      width: "90%",
      minHeight: 70,
      borderWidth: 1,
      borderColor: "#b2b2b2",
      borderRadius: 8,
      margin: "auto",
      marginTop: 8,
      padding: 10
  },
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
