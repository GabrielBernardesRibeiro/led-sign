import { useState } from "react";
import { Modal, Portal, Text, Button } from "react-native-paper";

const ModalComponent = ({ children, hideModal, showModal, visible }: any) => {
  const containerStyle = {};

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[
            containerStyle,
            {
              width: "80%",
            },
          ]}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, .8)",
          }}
        >
          {children}
        </Modal>
      </Portal>
    </>
  );
};

export default ModalComponent;
