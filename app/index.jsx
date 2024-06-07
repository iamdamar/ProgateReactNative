import React from 'react'
import {View, Text} from 'react-native'

const App = () => {
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>
                    Hello React Native
                </Text>
            </View>
            <View style={{flexDirection: 'row', height: 100}}>
                <View style={{backgroundColor: 'blue', flex: 1}} />
                <View style={{backgroundColor: 'red', flex: 1}} />
                <View style={{backgroundColor: 'green', flex: 1}} />
            </View>
        </View>
    )
}

export default App