import { StyleSheet, View, TouchableOpacity } from "react-native";
import ModalComponent from "./Modal.component";
import { useContext, useState } from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { Button } from "react-native-paper";
import { TextContext } from "../context/Text.context";

const TextColorComponent = () => {
  const { colorText, setColorText } = useContext(TextContext);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onColorChange = (color: string) => {
    setColorText(color);
  };

  return (
    <>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity
          onPress={showModal}
          style={{
            width: 125,
            height: 35,
            backgroundColor: colorText,
            marginRight: 10,
            borderWidth: 1,
            borderColor: "lightgray",
          }}
        />
        <ModalComponent
          visible={visible}
          showModal={showModal}
          hideModal={hideModal}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 30,
                backgroundColor: colorText,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            />
            <ColorPicker
              // @ts-ignore
              style={{
                padding: 20,
              }}
              color={colorText}
              onColorChange={(color) => onColorChange(color)}
              // onColorChangeComplete={(color) =>
              //   console.log(`Color selected: ${color}`)
              // }
              thumbSize={30}
              sliderSize={30}
              noSnap={true}
              row={false}
            />
            <Button
              mode="contained"
              onPress={hideModal}
              labelStyle={{ color: "white" }}
              style={{ backgroundColor: "#2EA44F" }}
            >
              Salvar
            </Button>
          </View>
        </ModalComponent>
      </View>
    </>
  );
};

export default TextColorComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,
  },
});
