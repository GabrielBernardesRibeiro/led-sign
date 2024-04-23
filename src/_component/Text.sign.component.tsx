import { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
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
    textSpeed,
  } = useContext(TextContext);
  const [currentColorText, setCurrentColorText] = useState<string>(colorText);
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState<string>(backgroundColorText);

  const backgroundColorOpacity = useSharedValue(1);
  const blinkBackgroundColorTextShared = useSharedValue(
    blinkBackgroundColorText
  );

  const duration = textSpeed < 100 ? -20 * textSpeed + 2000 : 100

  console.log(duration);

  const runBackgroundBlink = () => {
    backgroundColorOpacity.value = withRepeat(
      withSequence(
        withTiming(
          backgroundColorOpacity.value - 1,
          {
            duration: duration,
          },
          (isFinished) => {}
        ),
        withTiming(
          backgroundColorOpacity.value + 1,
          {
            duration: duration,
          },
          (isFinished) => {}
        )
      ),
      -1,
      true
    );
  };

  useEffect(() => {
    backgroundColorOpacity.value = 1;
    if (backgroundColorIsBlinking) runBackgroundBlink();
  }, [textSpeed]);

  useEffect(() => {
    if (backgroundColorIsBlinking) runBackgroundBlink();
    else backgroundColorOpacity.value = 1;
  }, [backgroundColorIsBlinking]);

  return (
    <>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal
          style={{
            width: "100%",
            backgroundColor: blinkBackgroundColorText,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 300,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                backgroundColor: currentBackgroundColor,
                width: "100%",
                opacity: backgroundColorOpacity,
                position: "absolute",
                height: "100%",
              }}
            />

            <Text
              style={{
                fontSize: 150,
                color: currentColorText,
              }}
            >
              {currentText}
            </Text>
          </View>
          <View style={{ paddingRight: 50 }} />
        </ScrollView>
      </View>
    </>
  );
};

export default TextSignComponent;
