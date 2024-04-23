import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useContext, useState } from "react";
import { TextContext } from "../context/Text.context";

const CustomSliderComponent = () => {
  const { textSpeed, handleTextSpeed } = useContext(TextContext);

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text style={{ color: "white" }}>Velocidade: </Text>
        <Slider
          style={{ height: 40, flexGrow: 1 }}
          minimumValue={0}
          value={textSpeed}
          maximumValue={100}
          onSlidingComplete={(value) => handleTextSpeed(value)}
          step={1}
          minimumTrackTintColor="#2EA44F)"
          maximumTrackTintColor="lightgray"
        />
        <Text style={{ color: "white" }}>{textSpeed}</Text>
      </View>
    </>
  );
};

export default CustomSliderComponent;
