import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../assets/images/icon.png')} 
            />
            <Image
                style={styles.image}
                source={{uri:'https://progate.com/images/ogp/about.png',}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    image: {
        width: 200,
        height: 200,
    },
})

export default App