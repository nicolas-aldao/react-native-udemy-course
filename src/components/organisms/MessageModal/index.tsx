import React from 'react';
import { Alert, Modal, Pressable, StyleSheet, View, Text } from 'react-native';

interface Props {
  messageCondition: boolean;
  textModal: string;
  onClose: () => void;
}

const MessageModal: React.FC<Props> = ({
  messageCondition,
  textModal,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={messageCondition}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        console.log();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{textModal}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onClose()}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MessageModal;

MessageModal.defaultProps = {
  //title: undefined,
};
