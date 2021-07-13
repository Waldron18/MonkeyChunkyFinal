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
import {Audio} from 'expo-av'


export default class PhonicButton extends React.Component {
    playSound=async()=>{
        await Audio.Sound.createAsync({
            uri:"https://s3-whitehatjrcontent.whjr.online/phones/"+this.props.phones+".mp3"
        },{
            shouldPlay: true
        })
    }

    render(){
        return(
            <TouchableOpacity style={styles.chunkButton} onPress={()=>{
                this.playSound();
            }}>
             <Text>{this.props.chunks}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    chunkButton: {
      backgroundColor: "lightgrey",
      padding: 20,
      justifyContent: "center",
      marginTop: 10,
    },
  });
  