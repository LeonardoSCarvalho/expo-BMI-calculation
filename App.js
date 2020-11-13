import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { TextInput, Button  } from 'react-native-paper';

export default function App() {
 
 const [imc, setImc] = useState(0);
 const [altura, setAltura] = useState(0);
 const [peso, setPeso] = useState(0);
 const [legenda, setLegenda] =useState('Ideterminado');
 const [cor, setCor] = useState('#bdc3c7')

  calcularIMC = () => {
    
    const resultado = peso / (altura * altura);
      setImc(resultado.toFixed(2));
    if(resultado < 18.5) {
        setLegenda('Magreza');
        setCor('#e74c3c');
    } else if (resultado >= 18.5 && resultado < 25) {
        setLegenda('Normal')
        setCor('#2ecc71')
    } else if (resultado >= 25 && resultado < 30) {
        setLegenda('Sobrepeso'); 
        setCor('#f1c40f');
    } else if (resultado >= 30 && resultado < 40) {
        setLegenda('Obesidade');
        setCor('#e67e22');
    } else if (resultado >= 40) {
        setLegenda('Obesidade Grave');
        setCor('#e74c3c')
    }
  }

    return (
      <SafeAreaView style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        
        <View style={[styles.painel, {backgroundColor:cor}]}>
          <Text style={styles.resultado}>{imc}</Text>
          <Text style={styles.diagnostico}>{legenda}</Text>
        </View>

        <View>
          <TextInput   label="Peso" style={styles.peso} onChangeText={ valor => { setPeso(valor) } } />
          <TextInput  label="Altura" style={styles.altura} onChangeText = { valor => { setAltura(valor.replace(',','.'))}}/>
          <Button style={styles.btn} mode="contained" onPress={this.calcularIMC} >Calcular</Button>
        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  app: {
    padding: 50,
    
  },
  painel: {
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    paddingVertical:50,
    alignSelf: 'center',
  },
  legenda: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
   marginVertical: 10,
  },
  btn: {
    marginTop:25,
    padding: 10,
    borderRadius: 50,
  }
});