import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, TextInput, FlatList} from 'react-native';
import {useState} from 'react';

export default function App() { 
     const [text, setText]=useState("");
     const [result, setResult] = useState("GUESS NUMBER BETWEEN 0-100");
     const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
     const [pressTimer, setPressTimer]= useState(1);
     const [data, setData ]= useState([]);
     function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }

  const buttonPressed = () =>{
    setData([...data,{key:text}]);
    setText("");
    setPressTimer (prevCount => prevCount + 1);
   const userGuess=parseFloat(text);

    if (userGuess === randomNumber){
  Alert.alert(`You guessed the number in ${pressTimer}`)
    }
    if (userGuess >randomNumber){
      setResult(`Your guess ${userGuess} is too high`);
    }
    if (userGuess <randomNumber){
      setResult(`Your guess ${userGuess} is too low`);

  }}
 
    
   

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
    
      <StatusBar style="auto" />
      <TextInput style={{width:200, borderColor:'grey', borderWidth:1}}onChangeText={inputText=>setText(inputText)}value={text}/>
    
      <View style={{ flexDirection: 'row',allingItems: 'center', justifyContent: 'space-around'}}>
      <Button title= "MAKE GUESS" onPress={buttonPressed}/>
      
      </View>
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
