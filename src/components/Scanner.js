import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Button from './Button';
import Camera from 'react-native-camera';

class Scanner extends PureComponent {
  onBarCodeRead = ({ data, type }) => {
    if (type.includes('org.iso.DataMatrix')) {
      data = data.substring(data.lastIndexOf('(240)') + 5);
    }

    this.props.onBarCodeRead(data);
  };

  render() {
    const { visible, onBarCodeReadCancel } = this.props;
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => {
          this.setState({ showBarcodeModal: false });
        }}
        visible={visible}
      >
        <View style={styles.container}>
          <Camera
            style={styles.preview}
            onBarCodeRead={this.onBarCodeRead}
            ref={cam => (this.camera = cam)}
          >
            <View style={[styles.cancel]}>
              <Button onPress={onBarCodeReadCancel}>Cancel</Button>
            </View>
          </Camera>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cancel: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 999
  }
});

export default Scanner;
