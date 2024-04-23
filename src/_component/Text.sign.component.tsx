import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { TextContext } from "../context/Text.context";

const TextSignComponent = () => {
  const {
    currentText,
    colorText,
    backgroundColorText,
    textIsBlinking,
    blinkColorText,
    backgroundColorIsBlinking,
    blinkBackgroundColorText,
  } = useContext(TextContext);

  const [currentColorText, setCurrentColorText] = useState<string>(colorText);
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState<string>(backgroundColorText);

  useEffect(() => {
    console.log(currentBackgroundColor);
  }, [currentBackgroundColor]);

  useEffect(() => {
    if (textIsBlinking) {
      const intervalBlink = setInterval(() => {
        if (currentColorText == colorText) setCurrentColorText(blinkColorText);
        else setCurrentColorText(colorText);
      }, 1000);

      return () => clearInterval(intervalBlink);
    } else {
      setCurrentColorText(colorText);
    }
  }, [textIsBlinking]);

  useEffect(() => {
    if (backgroundColorIsBlinking) {

    } else {
      setCurrentBackgroundColor(backgroundColorText);
    }
  }, [backgroundColorIsBlinking]);

  return (
    <>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal
          style={{
            width: "100%",
            backgroundColor: currentBackgroundColor,
            display: "flex",
            flexDirection: "row",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 150, color: currentColorText }}>
            {currentText}
          </Text>
          <View style={{ paddingRight: 50 }} />
        </ScrollView>
      </View>
    </>
  );
};

export default TextSignComponent;
