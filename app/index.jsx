import React, {useState} from 'react'
import {StyleSheet, View, TextInput} from 'react-native'

const App = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [question, setQuestion] = useState()

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Masukkan Nama'
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder='Masukkan Umur'
                onChangeText={setAge}
                value={age}
                keyboardType='numeric'
            />
            <TextInput
                style={styles.multiLineInput}
                placeholder='Masukkan pertanyaan'
                multiline={true}
                numberOfLines={3}
                onChangeText={setQuestion}
                value={question}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    multiLineInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default App