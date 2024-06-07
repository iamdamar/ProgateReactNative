import React from 'react'
import {StyleSheet, View, Button, Alert} from 'react-native'

const App = () => {
 
    return (
        <View>
            <View style={styles.buttonWrapper}>
            <Button
                title='Default Button'
                onPress={() => Alert.alert('Simple Button')}
                />
            </View>
            <View style={styles.buttonWrapper}>
            <Button
                title='Color Button'
                color='#f194ff'
                onPress={() => Alert.alert('Color Button')}
                />
            </View>
            <View style={styles.buttonWrapper}>
            <Button
                title='Disabled Button'
                disabled
                onPress={() => Alert.alert('Disable Button')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        margin: 10,
    },
})

export default App