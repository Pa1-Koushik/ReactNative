import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Hookforms() {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <View style={styles.container}>

      
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {errors.email && (
        <Text style={styles.error}>
          {errors.email.message}
        </Text>
      )}

      
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters"
          }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {errors.password && (
        <Text style={styles.error}>
          {errors.password.message}
        </Text>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});