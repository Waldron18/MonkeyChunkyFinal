import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Header } from "react-native-elements";
import db from "../localDb";
import { Audio } from "expo-av";

export default class PhonicButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: "",
    };
  }

  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          "https://s3-whitehatjrcontent.whjr.online/phones/" +
          this.props.phones +
          ".mp3",
      },
      {
        shouldPlay: true,
      }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={
          this.state.buttonPressed === this.props.buttonIndex
            ? styles.ButtonPressed
            : styles.ButtonnotPressed
        }
        onPress={() => {
          this.playSound();
          this.setState({
            buttonPressed: this.props.buttonIndex,
          });
        }}
      >
        <Text
          style={
            this.state.buttonPressed === this.props.buttonIndex
              ? styles.TextPressed
              : styles.TextnotPressed
          }
        >
          {this.props.chunks}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ButtonPressed: {
    backgroundColor: "lightgrey",
    padding: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  ButtonnotPressed: {
    backgroundColor: "red",
    padding: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  TextPressed: {
    color: "red",
    justifyContent: "center",
    fontSize: 10,
  },
  TextnotPressed: {
    color: "blue",
    justifyContent: "center",
    fontSize: 10,
  },
});
