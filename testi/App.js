import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, TextInput, FlatList} from 'react-native';
import {useState} from 'react';

export default function App() { 
     const [text, setText]=useState("");
     const [text1, setText1]=useState("");
     const [result, setResult] = useState(0);
     const [data, setData]=useState([]);
     const [history, setHistory]=useState("");

  const buttonPressed = () =>{
   

    const value1 = parseFloat(text) || 0;
    const value2 = parseFloat(text1) || 0;
    setResult(value1 + value2);
    const secondResult = value1+value2;
    setData([...data, {key: text}]);
    setText("");
    setResult(secondResult);
    setHistory(prevHistory => `${value1} + ${value2} = ${secondResult}\n${prevHistory}`);
    
  };
  const buttonPressed1 = () =>{
    

    const value1 = parseFloat(text) || 0;
    const value2 = parseFloat(text1) || 0;
    setResult(value1 - value2);
    const secondResult = value1-value2;
    setData([...data, {key: text}]);
    setText("");
    setResult(secondResult);
    setHistory(prevHistory => `${value1} - ${value2} = ${secondResult}\n${prevHistory}`);
  };
  
    
   

  return (
    <View style={styles.container} >
      <Text>Result: {result}</Text>
    
      <StatusBar style="auto" />
      <TextInput style={{width:200, borderColor:'grey', borderWidth:1}} keyboardType="numeric" onChangeText={inputText=>setText(inputText)}value={text}/>
      <TextInput style={{width:200, borderColor:'grey', borderWidth:1}} keyboardType="numeric" onChangeText={inputText1=>setText1(inputText1)}value={text1}/>
      <View style={{ flexDirection: 'row',allingItems: 'center', justifyContent: 'space-around'}}>
      <Button title= "+" onPress={buttonPressed}/>
      <Button title= "-" onPress={buttonPressed1}/>
      </View>
      <Text>History</Text>
      <Text>{history}</Text>
    </View>

  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    

  },
});
