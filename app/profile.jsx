import { Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from 'react-native-web';
import Demo from './demo';

const Profile = () => {
  const router = useRouter();
  const [counter, Setcounter] = useState(0)
  const updatehandler = () => {
    if (counter > 0) {
      Setcounter(counter - 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>

      <Pressable style={styles.button1} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
      <Pressable style={styles.button1} onPress={() => router.push('/app')}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      <Text>Count : {counter}</Text>
      <Pressable onPress={() => Setcounter(counter + 1)} style={styles.button1}>
        <Text style={styles.buttonText}>Update Count</Text>
      </Pressable>

      <Pressable onPress={() => Setcounter(prev => Math.max(0, prev - 1))} style={styles.button2}>
        <Text style={styles.buttonText}>Decrease Count</Text>
      </Pressable>         
      <Demo countvalue={counter} />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0eff3aff',
    borderRadius: 6,
  },
  button2: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ed0505ff',
    borderRadius: 6,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
