
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
        <View style={{ flex: 1, backgroundColor: 'red' }}>
        <DocumentScanner style={{ flex: 1 }}
            ref={(ref) => this.scanner = ref}
            manualOnly
            noGrayScale
            enableTorch
            onPictureTaken={data  =>{
                console.log('data:',data.path)
            }}
            detectionCountBeforeCapture={10}
        />
        <Button title="capture" onPress={()=>this._open()}/>
    </View>
    );
  }
}