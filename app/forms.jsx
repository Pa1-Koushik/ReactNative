import { useState } from "react"
import { Button, TextInput } from "react-native-web"
import { View, StyleSheet,Text } from "react-native"
import { router } from "expo-router"

const Forms = () => {
    const [name, Setname] = useState("")
    const [password, Setpassword] = useState("")
    const [email, Setemail] = useState("")
    const [clear, Setclear] = useState("")
    // const [display, Setdisplay] = useState(false)
    const [nameError,SetnameError] = useState(false)
    const [passError,SetpassError] = useState(false)
    const [emailError,SetemailError] = useState(false)

    const ClearData = () => {
        // Setdisplay(false)
        Setname("")
        Setpassword("")
        Setemail("")
    }
//   const handleSave = () => {
//     if (!name) {
//         SetnameError(true)
//     } else {
//         SetnameError(false)
//     }

//     if (!password) {
//         SetpassError(true)
//     } else {
//         SetpassError(false)
//     }

//     if (!email) {
//         SetemailError(true)
//     } else {
//         SetemailError(false)
//     }

//     // if (name && password && email) {
//     //     // Setdisplay(true)
//     // }
//     console.log("values",{name,password,email})
// }
const handleSave = () => {
    const isNameValid = name.trim() !== "";
    const isPasswordValid = password.trim() !== "";
    const isEmailValid = email.trim() !== "";

    SetnameError(!isNameValid);
    SetpassError(!isPasswordValid);
    SetemailError(!isEmailValid);

    console.log("values", { name, password, email });
};

    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={(text) => Setname(text)}
                    value={name}
                />
                {nameError?<Text style={styles.errortext}> Enter valid name </Text>:null}

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    onChangeText={(text) => Setpassword(text)}
                    value={password}  
                />
                        {passError?<Text style={styles.errortext}> Enter valid password </Text>:null}

                <TextInput
                    style={styles.inputLast}
                    placeholder="Enter your Email"
                    onChangeText={(text) => Setemail(text)}
                    value={email}
                />
                {emailError?<Text style={styles.errortext}> Enter valid Email </Text>:null}

                <View style={styles.buttonSpacing}>
                    <Button title="Save Date" onPress={handleSave} />
                    <Button title="Clear Date" onPress={ClearData} />
                    <Button title="Next" onPress={router.push("/hookforms")} />
                </View>
                {/* <View>
                {
                     display  ?
                        <View>
                            <Text>My name is {name}</Text>
                            <Text>My password is {password}</Text>
                            <Text>My email is {email}</Text>
                        </View>
                        : null
                }
                </View> */}



            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    card: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#ffffff",
        padding: 25,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },
    inputLast: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },
    buttonSpacing: {
        marginBottom: 10,
    },
   errortext: {
    color: '#d32f2f',        
    fontSize: 14,
    fontWeight: '500',
    marginTop: -8,           
    marginBottom: 10,
    paddingLeft: 4,
}
})

export default Forms