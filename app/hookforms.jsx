import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Formcomponents from "../components/formcomponents";


const Hookforms=()=>{
  const {control,handleSubmit,formState:{errors}} = useForm()

  const submit=(data)=>{
    console.log(data)
  }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Formcomponents 
        control={control} 
        itsname={'username'}
         placeholder={"Enter your name"} />
        <Formcomponents 
        control={control}
         itsname={'email'}
        placeholder={"Enter your email"} />
        <Formcomponents
         control={control}
          itsname={'password'}
          placeholder={"Enter your password"} />
        {/* <Controller
        name ='username'
          control={control}
          render={({field:{onBlur,onChange,value}}) => (
          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        rules={{required:true,minLength:3}}
        />
        {errors.username && <Text style={{color:'red',fontSize:10}}>Please enter valid name</Text>} */}
         {/* <Controller
         name ='email'
          control={control}
          render={({field:{onBlur,onChange,value}}) => (
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        rules={{required:true,minLength:3}}
        />
                {errors.email && <Text style={{color:'red',fontSize:10}}>Please enter valid email</Text>} */}

        <Button title="Submit" onPress={handleSubmit(submit)}/>
        </View>
    )
}
export default Hookforms

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
});



// export default function Hookforms() {

//   const {
//     control,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: ""
//     }
//   });

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <View style={styles.container}>

      
//       <Controller
//         control={control}
//         name="email"
//         rules={{
//           required: "Email is required",
//           pattern: {
//             value: /^\S+@\S+$/i,
//             message: "Invalid email format"
//           }
//         }}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Email"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//       />

//       {errors.email && (
//         <Text style={styles.error}>
//           {errors.email.message}
//         </Text>
//       )}

      
//       <Controller
//         control={control}
//         name="password"
//         rules={{
//           required: "Password is required",
//           minLength: {
//             value: 6,
//             message: "Minimum 6 characters"
//           }
//         }}
//         render={({ field: { onChange, value } }) => (
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Password"
//             secureTextEntry
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//       />

//       {errors.password && (
//         <Text style={styles.error}>
//           {errors.password.message}
//         </Text>
//       )}

//       <Button title="Login" onPress={handleSubmit(onSubmit)} />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     marginTop: 50
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10
//   },
//   error: {
//     color: "red",
//     marginBottom: 10
//   }
// });