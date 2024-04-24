import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ModalComponent from "./Modal.component";
import { useContext, useState } from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { Button } from "react-native-paper";
import { TextContext } from "../context/Text.context";

const BackgroundColorComponent = () => {
  const { backgroundColorText, setBackgroundColorText } =
    useContext(TextContext);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onColorChange = (color: string) => {
    setBackgroundColorText(color);
  };

  return (
    <>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transform: [],
            width: 125,
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white" }}>Cor do fundo</Text>
          <TouchableOpacity
            onPress={showModal}
            style={{
              width: "100%",
              height: 35,
              backgroundColor: backgroundColorText,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          />
        </View>
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
                backgroundColor: backgroundColorText,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            />
            <ColorPicker
              // @ts-ignore
              style={{
                padding: 20,
              }}
              color={backgroundColorText}
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

export default BackgroundColorComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,
  },
});
