import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const Formcomponents = ({itsname,placeholder,control}) => {
    return (
            <Controller
                name={itsname}
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        style={styles.input}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                    />
                )}
            />
    )
}

export default Formcomponents

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
})