import * as React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text: "",
      displayText:""
    }
  }

  render() {
    return <View style={styles.container}>
      <Header
      backgroundColor={'orange'}
      centerComponent={{text:"Monkey Chunky", style:styles.header}}
      />
      <TextInput style={styles.inputtext} onChangeText={(text)=>{
        this.setState({
          text: text
        })
      }}/>
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        this.setState({
          displayText: text
        })
      }}>
        <Text style={styles.buttontext}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header:{
    color: 'red',
    fontSize:18,
    fontWeight:"bold"
  },
  inputtext:{
    borderWidth:0.5,
    marginTop:200,
    padding:10,
    width: "80%",
    textAlign:'center'
  },
  buttontext:{
    color:'red'
  },
  button:{
    backgroundColor:'yellow',
    marginTop:50,
    padding:10,
    width: "50%",
    alignItems:'center',
    borderRadius:10
  }
});
