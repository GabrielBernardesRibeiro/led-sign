import { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import ModalComponent from "./Modal.component";
import ColorPicker from "react-native-wheel-color-picker";
import { TextContext } from "../context/Text.context";

const BackgroundBlinkComponent = () => {
  const {
    blinkBackgroundColorText,
    setBlinkBackgroundColorText,
    setBackgroundColorIsBlinking,
  } = useContext(TextContext);

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onColorChange = (color: string) => {
    setBlinkBackgroundColorText(color);
  };

  const handleBackgroundBlink = () => {
    const currentStateOfChecked = !checked;
    setBackgroundColorIsBlinking(currentStateOfChecked);
    setChecked(currentStateOfChecked);
  };

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <RadioButton
          value="first"
          color="#2EA44F"
          status={checked ? "checked" : "unchecked"}
          onPress={handleBackgroundBlink}
        />
        <Text style={{ color: "white" }}>Piscar Fundo</Text>

        {checked && (
          <TouchableOpacity
            onPress={showModal}
            style={{
              width: 100,
              height: 30,
              backgroundColor: blinkBackgroundColorText,
              marginLeft: 10,
              marginRight: 10,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          />
        )}

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
                backgroundColor: blinkBackgroundColorText,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            />
            <ColorPicker
              // @ts-ignore
              style={{
                padding: 20,
              }}
              color={color}
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

export default BackgroundBlinkComponent;
