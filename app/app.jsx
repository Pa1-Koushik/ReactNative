import react, { useEffect, useRef,useState } from 'react'
import { View,Text,Pressable } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { styles } from '../styles/commonstyles'
import { useRouter } from 'expo-router';


const App = () => {
    const [Data,SetData] = useState(0)
    const [Val,SetVal] = useState(0)
    // const refvalue = useRef(0)
    const inputRef = useRef(null)
    const [show, setShow] = useState(false);
    const router = useRouter();
    const increment =()=>{
        refvalue.current += 1;
        console.log(refvalue.current);
    }
     useEffect(() => {
    inputRef.current.focus();
  }, []);
//     useEffect(()=>{
//      console.log("statement from useEffect 1") 
//     }) // will run everytime any state changes

//   useEffect(() => {
//     console.log("statement from useEffect 2")

//   }, []) //if you want to run only once

//   useEffect(()=>{
// console.log("Statement from useEffect 3;dependency on Data")
//   },[Data]) // will run only when the dependent value changes.
 
return (
  <View style={styles.container}>

    <View style={styles.row}>
      <Button title="Inc" color="green" onPress={() => SetData(Data + 1)} />
      <Button title="Dec" color="red" onPress={() => SetData(Math.max(0, Data - 1))} />
      <Text style={styles.text}>Value: {Data}</Text>
    </View>

    
    <View style={styles.row}>
      <Button title="Inc" color="green" onPress={() => SetVal(Val + 1)} />
      <Button title="Dec" color="red" onPress={() => SetVal(Math.max(0, Val - 1))} />
      <Text style={styles.text}>Value: {Val}</Text>
    </View>

     <View style={styles.row}>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show && <Child />}
    </View>
    <View>
      <TextInput
        ref={inputRef}
        placeholder="Placeholder"
        style={{ borderWidth: 1, padding: 10 }}
      />
    </View>
    <Pressable style={styles.button1} onPress={() => router.push('/forms')}>
      <Text style={styles.buttonText}>Next</Text>
    </Pressable>

  </View>
);
}

export default App;

const Child = () => {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <Text>I am Child</Text>;
};
// class App extends react.Component {
    
//     render()
//     {
//         return(
//             <View>
//                 <Text> Class Component </Text>
//             </View>
//         )
//     }
// }

// export default App