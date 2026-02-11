import { Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from 'react-native-web';

const Index = () => {
  const router = useRouter();
  const [Username,SetUsername] = useState({name:'Arun',age:26})

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
     
      <Pressable style={styles.button} onPress={()=>router.push('/profile')}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      <Text>My name is {Username.name}</Text>
        <Text>My age is {Username.age}</Text>
        <Button title='Update Details' onPress={()=>SetUsername({name:"PK",age:25})} ></Button>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
});
