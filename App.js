import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { supabase } from './conexao';

export default function App() {
  const [descricaoDigitada, setDescricaoDigitada] = useState("");
  const [valorDigitado, setValorDigitado] = useState("");
  const [dados, setDados] = useState([]);
  //Função para consultar os dados no Banco de Dados
  const consultarDados = async()=>{
      const {data, error} = await supabase.from("tb_contas")
      .select("*");
    if(error){
        alert("Falha ao consultar os dados!")
    }else{
        setDados(data);
    }

  }  

  // Criar uma função para inserir no Banco de dados
  const cadastrarConta = async(desc, vl)=>{
    const {error} = await supabase.from("tb_contas")
    .insert({coluna_descricao: desc, coluna_valor: vl, coluna_status: false});

    if(error){
      alert("Falha ao cadastrar!")
    }else{
      alert("Cadastrado com sucesso!")
    }

  }

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
