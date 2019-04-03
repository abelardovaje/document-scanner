
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DocumentScanner from 'react-native-documentscanner-android';
export default class Test extends Component {

  constructor(props){
      super(props);
      this.scanner;
  }  

  _open = () =>{
    this.scanner.capture();
  }

  render() {
    return (
      <View style={{flex:1}}>
         <DocumentScanner
          onPictureTaken={data => {
            console.log(data.path);
          }}
          enableTorch={false}
          detectionCountBeforeCapture={5}
        />
      </View>
    );
  }
}