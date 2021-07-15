import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { Header } from "react-native-elements";
import db from "./localDb";
import PhonicButton from "./component/PhonicButton";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      displayText: "",
      chunks: [],
      phoneme: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"orange"}
          centerComponent={{ text: "Monkey Chunky", style: styles.header }}
        />

        <Image style={styles.image} source={require("./assets/life.png")} />

        <TextInput
          style={styles.inputtext}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]
              ? this.setState({
                  chunks: db[word].chunks,
                  phoneme: db[word].phones,
                })
              : Alert.alert("THE WORD DOES NOT EXIST IN THE DATABASE");
          }}
        >
          <Text style={styles.buttontext}>SUBMIT</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((chunk, index) => {
            console.log(this.state.phoneme[index]);

            return (
              <PhonicButton
                chunks={chunk}
                phones={this.state.phoneme[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputtext: {
    borderWidth: 0.5,
    marginTop: 50,
    padding: 10,
    width: "80%",
    textAlign: "center",
  },
  buttontext: {
    color: "red",
  },
  button: {
    backgroundColor: "yellow",
    marginTop: 50,
    padding: 10,
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
  },
  chunkButton: {
    backgroundColor: "lightgrey",
    padding: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
