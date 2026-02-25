import { useState } from "react"
import { Button, TextInput } from "react-native-web"
import { View, StyleSheet,Text } from "react-native"

const Forms = () => {
    const [name, Setname] = useState("")
    const [password, Setpassword] = useState("")
    const [email, Setemail] = useState("")
    const [clear, Setclear] = useState("")
    const [display, Setdisplay] = useState(false)

    const ClearData = () => {
        Setdisplay(false)
        Setname("")
        Setpassword("")
        Setemail("")
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={(text) => Setname(text)}
                    value={name}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    onChangeText={(text) => Setpassword(text)}
                    value={password}
                    
                />

                <TextInput
                    style={styles.inputLast}
                    placeholder="Enter your Email"
                    onChangeText={(text) => Setemail(text)}
                    value={email}
                />

                <View style={styles.buttonSpacing}>
                    <Button title="Save Date" onPress={()=>Setdisplay(true)} />
                    <Button title="Clear Date" onPress={ClearData} />
                </View>
                <View>
                {
                     display  ?
                        <View>
                            <Text>My name is {name}</Text>
                            <Text>My password is {password}</Text>
                            <Text>My email is {email}</Text>
                        </View>
                        : null
                }
                </View>



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
    }
})

export default Forms