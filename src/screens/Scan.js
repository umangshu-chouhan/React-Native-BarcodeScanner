import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Scanner from '../components/Scanner';

export default class Scan extends Component {
  state = {
    showBarcodeModal: false,
    barcode: ''
  };
  onBarCodeRead = barcode => {
    this.setState({ showBarcodeModal: false, barcode });
  };

  onBarCodeReadCancel = () => {
    this.setState({ showBarcodeModal: false });
  };

  _renderScanner = () => {
    return (
      <Scanner
        visible={this.state.showBarcodeModal}
        onBarCodeRead={this.onBarCodeRead}
        onBarCodeReadCancel={this.onBarCodeReadCancel}
      />
    );
  };

  render = () => {
    return (
      <View style={styles.container}>
        {this._renderScanner()}
        <Text>Scanned barcode would be displayed here:</Text>
        <View style={styles.scan}>
          <Button
            onPress={() => {
              this.setState({ showBarcodeModal: true });
            }}
          >
            Scan Barcode
          </Button>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  scan: {
    width: '60%',
    height: 40,
    marginTop: 20
  }
});
