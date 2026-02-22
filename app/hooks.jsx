// import React, { useState, useMemo } from 'react';
// import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

// const Hooks = () => {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   const expensiveResult = useMemo(() => {
//     console.log("Calculating...");
//     let result = 0;
//     for (let i = 0; i < 10000000; i++) {
//       result += count;
//     }
//     return result;
//   }, [count]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>
//         {/* <Text style={styles.title}>Performance Tracker</Text> */}
        
//         <View style={styles.resultBox}>
//           <Text style={styles.label}>Expensive Result:</Text>
//           <Text style={styles.value}>{expensiveResult}</Text>
//         </View>

//         <View style={styles.statusBox}>
//           <Text style={styles.label}>Other State:</Text>
//           <Text style={[styles.status, { color: otherState ? '#4CAF50' : '#F44336' }]}>
//             {otherState ? 'ON' : 'OFF'}
//           </Text>
//         </View>

//         <View style={styles.buttonContainer}>
//           <Button title="Increment Count" onPress={() => setCount(count + 1)} />
//           <View style={styles.spacer} />
//           <Button 
//             title="Toggle Other State" 
//             color="#607D8B"
//             onPress={() => setOtherState(!otherState)} 
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     padding: 25,
//     elevation: 5, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   resultBox: {
//     backgroundColor: '#e3f2fd',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   statusBox: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   label: {
//     fontSize: 14,
//     color: '#666',
//     marginRight: 8,
//   },
//   value: {
//     fontSize: 28,
//     fontWeight: '900',
//     color: '#1976D2',
//   },
//   status: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     marginTop: 10,
//   },
//   spacer: {
//     height: 12,
//   },
// });

// export default Hooks;