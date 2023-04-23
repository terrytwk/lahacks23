import { View, Modal, StyleSheet } from "react-native";

// import components
import ModalHeader from "./ModalHeader";

const CustomModal = ({ modalVisible, setModalVisible, title, ModalBody }) => {
  return (
    <Modal
      //   animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalCenteredView}>
        <View style={styles.modalView}>
          <ModalHeader title={title} setModalVisible={setModalVisible} />
          {ModalBody}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    height: "60%",
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomModal;
