import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, YellowBox, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/color';
YellowBox.ignoreWarnings(['Picker has been extracted']);




export default function App() {

  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);

const calculate =()=>{
  reset();
  if (!capital) {
    setErrorMessage('Añade la cantidad que quieres solicitar');
  } else if (!interest) {
    setErrorMessage('Añade el interes del prestamos');
  } else if (!months) {
    setErrorMessage('Seleccióna los meses a pagar');
  } else {
    const i = interest / 100;
    const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
    setTotal({
      monthlyFee: fee.toFixed(2).replace('.', ','),
      totalPayable: (fee * months).toFixed(2).replace('.', ','),
    });
  }
}

const reset = () => {
  setErrorMessage('');
  setTotal(null);
};
  
  return (
    <>
    <StatusBar barStyle="light-content"/>
    {/* cabecera = safe*/}
     <SafeAreaView style={styles.SafeArea}>
     <View style={styles.background} />
     <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
     <Form
       setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
     />
    </SafeAreaView>
    <ResultCalculation
       capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
    />
    <Footer calculate={calculate}/>
    
    </>
    
  );
}

const styles  = StyleSheet.create({
  SafeArea:{
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    // z-index funciona cuando el container tiene un pasit= relativa o abs
    zIndex: -1,
  },
  titleApp:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
})