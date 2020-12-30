import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
   
class MessageScreen extends Component {
    state = {
        id: Number,
        message: ''
     }
    handleMessage = (text) => {
        this.setState({ message: text })
    }
    sendMessage(){
        console.log(this.state.message)
    }
    render() {
      return (
        <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Message"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleMessage}>
        </TextInput>
        <Button
          style={{
            width: 100,
            height: 20
          }}
          onPress={this.sendMessage}
          title="🕊"

        >
        </Button>
      </View>
      )
    }
}
export default MessageScreen

const styles = StyleSheet.create({
    input: {
       margin: 10,
       width: 320,
       height: 35,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    flexContainer: {   // A
        flexDirection: 'row'  // B
    },
 })